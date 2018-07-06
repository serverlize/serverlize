import * as DynamoDB from 'aws-sdk/clients/dynamodb';
import { find, isArray } from 'lodash';

import AbstractExpression from '../Expressions/AbstractExpression';
import Model from '../Model';
import TableIndex from '../Resources/TableIndex';
import { Omit } from '../Util';

export interface Input
  extends DynamoDB.Types.ScanInput,
    DynamoDB.Types.QueryInput {
  [key: string]: any;
}
export type AllOptions = Omit<Input, 'TableName'>;
export type FilterOptions = Omit<
  Input,
  | 'TableName'
  | 'FilterExpression'
  | 'ExpressionAttributeNames'
  | 'ExpressionAttributeValues'
>;
export type ExecOptions = Omit<Input, 'TableName'>;

export default abstract class AbstractRequest {
  protected readonly model: typeof Model;
  protected readonly index?: TableIndex;

  constructor(model: typeof Model, indexName?: string) {
    this.model = model;

    if (indexName) {
      const index = find(this.model.table.indexes, ['name', indexName]);
      if (!index) {
        throw new Error(`Index with name ${indexName} does not exist!`);
      }
      this.index = index;
    }
  }

  public all = async (options?: AllOptions) => {
    const collection = await this.exec(options);

    if (collection.cursor && collection.cursor.lastKey) {
      return collection.paginate();
    }

    return collection;
  };

  public filter = (
    filters: AbstractExpression<any> | AbstractExpression<any>[],
    options?: FilterOptions
  ) => {
    let filterList: AbstractExpression<any>[] = [];
    if (filters instanceof AbstractExpression) {
      filterList.push(filters);
    }
    if (isArray(filters)) {
      filterList = filters;
    }

    const request = this.applyFilters(filterList);

    return this.exec({ ...request, ...options });
  };

  protected applyFilters = (filterList: AbstractExpression<any>[]) => {
    // This should definitely be refactored - bleurgh
    return filterList.reduce(
      (request, val) => {
        const filterObject = val.generate();

        ['ExpressionAttributeNames', 'ExpressionAttributeValues'].forEach(
          (property: string) => {
            if (request[property]) {
              request[property] = {
                ...filterObject[property],
                ...request[property],
              };
            }
          }
        );

        return {
          ...filterObject,
          ...request,
        };
      },
      {} as Partial<Input>
    );
  };

  abstract exec: (options?: ExecOptions) => Promise<any>;
}
