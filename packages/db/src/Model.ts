import * as DynamoDB from 'aws-sdk/clients/dynamodb';

import AdapterInterface from './Adapters/AdapterInterface';
import Collection from './Collection';
import Query from './Requests/Query';
import Scan from './Requests/Scan';
import TableInterface from './Resources/TableInterface';
import SchemaInterface from './Schemas/SchemaInterface';
import { DataSchema, KeySchema } from './types';
import { Omit } from './Util';

// Exclude certain options since they can be set via API
export type ExcludedLookupProps = 'TableName' | 'Key';
export type ExcludedItemProps = 'TableName' | 'Item';
export type ExcludedBatchProps = 'RequestItems';

export type PutOptions = Omit<
  DynamoDB.DocumentClient.PutItemInput,
  ExcludedItemProps
>;
export type CreateOptions = Omit<
  DynamoDB.DocumentClient.PutItemInput,
  | 'ConditionExpression'
  | 'ExpressionAttributeNames'
  | 'ExpressionAttributeValues'
>;
export type GetOptions = Omit<
  DynamoDB.DocumentClient.GetItemInput,
  ExcludedLookupProps
>;
export type UpdateOptions = Omit<
  DynamoDB.DocumentClient.UpdateItemInput,
  ExcludedLookupProps
>;
export type DeleteOptions = Omit<
  DynamoDB.DocumentClient.DeleteItemInput,
  ExcludedLookupProps
>;
export type BatchGetOptions = Omit<
  DynamoDB.DocumentClient.BatchGetItemInput,
  ExcludedBatchProps
>;
export type BatchPutOptions = Omit<
  DynamoDB.DocumentClient.BatchWriteItemInput,
  ExcludedBatchProps
>;
export type BatchDeleteOptions = Omit<
  DynamoDB.DocumentClient.BatchWriteItemInput,
  ExcludedBatchProps
>;

export default class Model<D extends DataSchema, K extends KeySchema> {
  /************************************
   *         STATIC METHODS           *
   ************************************/

  /**
   * Instance of `Adapter` for making calls to the DynamoDB SDK.
   */
  public static readonly adapter: AdapterInterface;
  /**
   * Instance of `Schema` for model attributes' parsing and validation.
   */
  public static readonly schema: SchemaInterface;
  /**
   * Instance of `Table` for representing the backing resource on DynamoDB.
   */
  public static readonly table: TableInterface;

  /**
   * Creates a new instance of `Model` from `item`, and assigns a reference to the static Model as a property.
   * @param {D} item
   * @returns {Model}
   */
  static createModelInstance<D extends DataSchema>(item: D) {
    const modelInstance = new this(item);
    modelInstance.$static = this;
    return modelInstance;
  }

  /**
   * Puts an item in the DynamoDB table. If the key already exists in the table, then this will overwrite the
   * existing item.
   * @param {D} item
   * @param {PutOptions} options
   * @returns {Promise<Model>}
   */
  static async put<D extends DataSchema>(item: D, options?: PutOptions) {
    const request = {
      TableName: this.table.name,
      Item: item,

      ...options,
    };

    await this.adapter.put(request);
    return this.createModelInstance(item);
  }

  /**
   * Creates a new item in the DynamoDB table. If the key already exists in the table, then this throws a
   * `ConditionalCheckFailed` error.
   * @param {D} item
   * @param {CreateOptions} options
   * @returns {Promise<Model>}
   * @throws {ConditionalCheckFailed}
   */
  static async create<D extends DataSchema>(item: D, options?: CreateOptions) {
    const putOptions = {
      ConditionExpression:
        'attribute_not_exists(#__hash_key) AND attribute_not_exists(#__range_key)',
      ExpressionAttributeNames: {
        '#__hash_key': this.table.hashKey,
        '#__range_key': this.table.rangeKey,
      },

      ...options,
    };

    return this.put(item, putOptions);
  }

  /**
   * Gets an item from the DynamoDB table.
   * @param {K} key
   * @param {GetOptions} options
   * @returns {Promise<Model>}
   */
  static async get<K extends KeySchema>(key: K, options?: GetOptions) {
    const { Item } = await this.adapter.get({
      TableName: this.table.name,
      Key: key,

      ...options,
    });

    if (!Item) {
      return Promise.resolve({});
    }

    return this.createModelInstance(Item);
  }

  /**
   * Updates an item in the DynamoDB table.
   * @param {D} item
   * @param {UpdateOptions} options
   * @returns {Promise<Model>}
   */
  static async update<D extends DataSchema>(item: D, options?: UpdateOptions) {
    const key: KeySchema = {
      [this.table.hashKey]: item[this.table.hashKey],
      [this.table.rangeKey]: item[this.table.rangeKey],
    };

    await this.adapter.update({
      TableName: this.table.name,
      Key: key,

      ...options,
    });

    return this.createModelInstance(item);
  }

  /**
   * Deletes an item in the DynamoDB table.
   * @param {K} key
   * @param {DeleteOptions} options
   * @returns {Promise<void>}
   */
  static async delete<K extends KeySchema>(key: K, options?: DeleteOptions) {
    await this.adapter.delete({
      TableName: this.table.name,
      Key: key,

      ...options,
    });

    return;
  }

  /**
   * Puts a batch of items in the DynamoDB table.
   * @param {D[]} items
   * @param {BatchPutOptions} options
   * @returns {Promise<Collection<DataSchema, KeySchema>>}
   */
  static async batchPut<D extends DataSchema, K extends KeySchema>(
    items: D[],
    options?: BatchPutOptions
  ): Promise<any> {
    const requests: DynamoDB.DocumentClient.WriteRequest[] = items.map(
      (item: D) => {
        return {
          PutRequest: {
            Item: item,
          },
        };
      }
    );

    await this.adapter.batchWrite({
      RequestItems: {
        [this.table.name]: requests,
      },
    });

    return new Collection(this, items);
  }

  /**
   * Gets a batch of items from the DynamoDB table and returns a `Collection` of `Model` instances.
   * @param {K[]} keys
   * @param {BatchGetOptions} options
   * @returns {Promise<Collection<DataSchema, KeySchema>>}
   */
  static async batchGet<D extends DataSchema, K extends KeySchema>(
    keys: K[],
    options?: BatchGetOptions
  ): Promise<any> {
    const { Responses } = await this.adapter.batchGet({
      RequestItems: {
        [this.table.name]: {
          Keys: keys,
        },
      },

      ...options,
    });

    if (!Responses) {
      return new Collection(this, []);
    }

    return new Collection(this, Responses[this.table.name]);
  }

  /**
   * Deletes a batch of items from the DynamoDB table.
   * @param {K[]} keys
   * @param {BatchPutOptions} options
   * @returns {Promise<void>}
   */
  static async batchDelete<D extends DataSchema, K extends KeySchema>(
    keys: K[],
    options?: BatchDeleteOptions
  ) {
    const requests: DynamoDB.DocumentClient.WriteRequest[] = keys.map(
      (key: K) => {
        return {
          DeleteRequest: {
            Key: key,
          },
        };
      }
    );

    await this.adapter.batchWrite({
      RequestItems: {
        [this.table.name]: requests,
      },
    });
    return;
  }

  /**
   * Scans a table or an index.
   * @param {string} indexName If provided, the scan will be limited to the specified index.
   * @returns {Scan}
   */
  static scan(indexName?: string) {
    return indexName ? new Scan(this, indexName) : new Scan(this);
  }

  /**
   * Queries a table or an index.
   * @param {string} indexName If provided, the query will be limited to the specified index.
   * @returns {Query}
   */
  static query(indexName?: string) {
    return indexName ? new Query(this, indexName) : new Query(this);
  }

  /************************************
   *         INSTANCE METHODS         *
   ************************************/

  /**
   * Reference to Model constructor, as set by `Model.createModelInstance()`.
   */
  protected $static!: typeof Model;

  /**
   * Internal POJO representing a DynamoDB item.
   */
  protected item: DataSchema;

  constructor(item: DataSchema) {
    this.item = item;
  }

  /**
   * Saves a model instance to the DynamoDB table.
   * @returns {Promise<Model>}
   */
  save = async () => {
    return this.$static.put(this.item);
  };

  /**
   * Deletes a model instance from the DynamoDB table.
   * @returns {Promise<void>}
   */
  delete = async () => {
    const key: KeySchema = {
      [this.$static.table.hashKey]: this.item[this.$static.table.hashKey],
      [this.$static.table.rangeKey]: this.item[this.$static.table.rangeKey],
    };

    await this.$static.delete(key);
    return;
  };

  /**
   * Serializes the model instance to a JSON string.
   * @returns {string}
   */
  toJson = () => {
    return JSON.stringify(this.item);
  };

  /**
   * Serializes the model instance to a POJO.
   * @returns {DataSchema}
   */
  toObject = () => {
    return this.item as D;
  };
}
