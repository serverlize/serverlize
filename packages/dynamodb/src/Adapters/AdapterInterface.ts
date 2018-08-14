import {
  BatchGetOptions,
  DataMapper,
  GetOptions,
} from '@aws/dynamodb-data-mapper';
import Model from '../Model';
import { KeySchema } from '../types';

export default interface AdapterInterface {
  readonly mapper: DataMapper;

  /**
   * Returns the attributes of one or more items from a table.
   */
  batchGet<D, K>(
    models: Model[],
    options?: BatchGetOptions,
  ): AsyncIterableIterator<{}>;
  /**
   * Puts or overwrites multiple items in a table.
   */
  batchPut<D, K>(models: Model[]): AsyncIterableIterator<{}>;
  /**
   * Deletes multiple items in a table.
   */
  batchDelete<D, K>(models: Model[]): AsyncIterableIterator<{}>;
  /**
   * Deletes a single item in a table by primary key.
   */
  delete<D, K>(model: Model): Promise<Model | undefined>;
  /**
   * Returns a set of attributes for the item with the given primary key.
   */
  get<D, K>(model: Model, options?: GetOptions): Promise<Model>;
  /**
   * Creates a new item, or replaces an old item with a new item.
   */
  put<D, K>(model: Model): Promise<Model>;
  /**
   * Edits an existing item's attributes, or adds a new item to the table if it does not already exist.
   */
  update<D, K>(model: Model): Promise<Model>;
  /**
   * Directly access items from a table by primary key or a secondary index.
   */
  query(key: KeySchema, model: typeof Model): any;
  /**
   * Returns one or more items and item attributes by accessing every item in a table or a secondary index.
   */
  scan(model: typeof Model): any;
}
