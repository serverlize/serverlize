import collect, { Collection as BaseCollection } from 'collect.js';

import Model from './Model';
import { Cursor, DataSchema, KeySchema } from './types';

export default class Collection<D extends DataSchema, K extends KeySchema> {
  public readonly cursor?: Cursor;

  private readonly model: typeof Model;
  private items: BaseCollection<Model<D, K>>;

  constructor(
    model: typeof Model,
    items: D[] | Model<D, K>[],
    cursor?: Cursor,
  ) {
    this.model = model;
    this.items =
      items[0] instanceof Model
        ? collect(items as Model<D, K>[])
        : collect(this.createModels(items as D[]));

    this.cursor = cursor;
  }

  private createModels = <D extends DataSchema, K extends KeySchema>(
    items: D[],
  ) => {
    return items.map((item: D) => {
      return new this.model<D, K>(item);
    });
  };

  /**
   * Pagination
   */

  paginate = async () => {
    const { lastKey, request } = this.cursor as Cursor;

    const parsedRequest = JSON.parse(request);
    // Get request type from first key
    const [requestType] = Object.keys(parsedRequest);
    // Create next request
    const nextRequest = {
      ...parsedRequest[requestType],
      ExclusiveStartKey: lastKey,
    };

    // Fire next request
    const { Items, LastEvaluatedKey } = await (this.model.adapter as any)[
      requestType
    ](nextRequest);

    // Return new `Collection`
    return this.merge(Items as D[], {
      lastKey: LastEvaluatedKey,
      request: JSON.stringify(request),
    });
  };

  merge = (items: D[], cursor: Cursor) => {
    return new Collection(
      this.model,
      this.items.merge(this.createModels(items)).all(),
      cursor,
    );
  };

  all = () => {
    return this.items.all();
  };

  toArray = (): D[] => {
    return this.items.all().map((modelInstance: Model<D, K>) => {
      return modelInstance.toObject();
    });
  };

  toJson = () => {
    return this.items.all().map((modelInstance: Model<D, K>) => {
      return modelInstance.toJson();
    });
  };
}
