import AdapterInterface from './Adapters/AdapterInterface';
import { DataSchema, KeySchema } from './types';

export default class Model<D extends DataSchema = D, K extends KeySchema = K> {
  /************************************
   *         STATIC METHODS           *
   ************************************/

  /**
   * Instance of `Adapter` for making calls to the DynamoDB SDK.
   */
  public static readonly adapter: AdapterInterface;

  /**
   * Puts an item in the DynamoDB table. If the key already exists in the table, then this will overwrite the
   * existing item.
   * @param {DataSchema} item
   * @returns {Promise<Model>}
   */
  static async put(item: DataSchema): Promise<Model> {
    return this.adapter.put(this.hydrateModel(item));
  }

  /**
   * Creates a new item in the DynamoDB table. If the key already exists in the table, then this throws a
   * `ConditionalCheckFailed` error.
   * @param {DataSchema} item
   * @returns {Promise<Model>}
   */
  static async create(
    item: DataSchema,
    // options?: CreateOptions
  ): Promise<Model> {
    // @TODO Convert this to `@aws/dynamodb-expressions` package
    // const putOptions = {
    //   ConditionExpression:
    //     'attribute_not_exists(#__hash_key) AND attribute_not_exists(#__range_key)',
    //   ExpressionAttributeNames: {
    //     '#__hash_key': this.table.hashKey,
    //     '#__range_key': this.table.rangeKey,
    //   },
    //
    //   ...options,
    // };
    // @TODO Use a condition to prevent overwrites

    // return this.adapter.put(this.hydrateModel(item), putOptions);
    return this.adapter.put(this.hydrateModel(item));
  }

  /**
   * Gets an item from the DynamoDB table.
   * @param {KeySchema} key
   * @returns {Promise<Model>}
   */
  static async get(key: KeySchema, options): Promise<Model> {
    return this.adapter.get(this.hydrateModel(key), options);
  }

  /**
   * Updates an item in the DynamoDB table.
   * @param {DataSchema} item
   * @returns {Promise<Model>}
   */
  static async update(item: DataSchema): Promise<Model> {
    return this.adapter.update(this.hydrateModel(item));
  }

  /**
   * Deletes an item in the DynamoDB table.
   * @param {KeySchema} key
   * @returns {Promise<void>}
   */
  static async delete(key: KeySchema) {
    await this.adapter.delete(this.hydrateModel(key));

    return;
  }

  /**
   * Puts a batch of items in the DynamoDB table.
   * @param {DataSchema[]} items
   * @returns {Promise<Model[]>}
   */
  static async batchPut(items: DataSchema[]): Promise<any> {
    const hydratedModels = items.map(this.hydrateModel);
    await this.adapter.batchPut(hydratedModels);

    return hydratedModels;
  }

  /**
   * Gets a batch of items from the DynamoDB table.
   * @param {KeySchema[]} keys
   * @returns {Promise<Model[]>}
   */
  static async batchGet(keys: KeySchema[], options): Promise<any> {
    return this.adapter.batchGet(keys.map(this.hydrateModel), options);
  }

  /**
   * Deletes a batch of items from the DynamoDB table.
   * @param {KeySchema[]} keys
   * @returns {Promise<void>}
   */
  static async batchDelete(keys: KeySchema[]) {
    await this.adapter.batchDelete(keys.map(this.hydrateModel));
    return;
  }

  // /**
  //  * Scans a table or an index.
  //  * @param {string} indexName If provided, the scan will be limited to the specified index.
  //  * @returns {Scan}
  //  */
  // static scan(indexName?: string) {
  //   return indexName ? new Scan(this, indexName) : new Scan(this);
  // }
  //
  // /**
  //  * Queries a table or an index.
  //  * @param {string} indexName If provided, the query will be limited to the specified index.
  //  * @returns {Query}
  //  */
  // static query(indexName?: string) {
  //   return indexName ? new Query(this, indexName) : new Query(this);
  // }

  /**
   * Transform a POJO into a `Model`
   * @param {DataSchema} item
   * @returns {Model}
   */
  private static hydrateModel(item: DataSchema): Model {
    return Object.assign(new this(), item);
  }

  /************************************
   *         INSTANCE METHODS         *
   ************************************/

  /**
   * Reference to Model constructor, as set by `Model.createModelInstance()`.
   */
  protected $static!: typeof Model;

  // constructor(item: DataSchema) {
  //   this.item = item;
  // }

  /**
   * Saves a model instance to the DynamoDB table.
   * @returns {Promise<Model>}
   */
  save = async () => {
    return this.$static.put(this);
  };

  /**
   * Deletes a model instance from the DynamoDB table.
   * @returns {Promise<void>}
   */
  delete = async () => {
    await this.$static.delete(this);
    return;
  };
}
