import * as DynamoDB from 'aws-sdk/clients/dynamodb';
import find from 'lodash.find';
import pick from 'lodash.pick';

import AdapterInterface from './Adapters/AdapterInterface';
import DynamoDBAdapter from './Adapters/DynamoDB';
import Model from './Model';
import Table, { TableOptions } from './Resources/Table';
import { IndexOptions } from './Resources/TableIndex';
import Schema, { SchemaOptions } from './Schemas/Schema';
import { DataSchema, KeySchema, ThroughputOptions } from './types';

export interface CreateModelOptions extends SchemaOptions {
  indexes?: IndexOptions[];
  name: string;
  throughput: number | ThroughputOptions;
}

export default class DB {
  protected static adapter: AdapterInterface = new DynamoDBAdapter(
    new DynamoDB.DocumentClient(),
  );
  // protected static client: DynamoDB.DocumentClient = new DynamoDB.DocumentClient();
  protected static models: { [key: string]: typeof Model } = {};

  static getClient = (): DynamoDB.DocumentClient => {
    return DB.adapter.client;
  };

  static setClient = (client: DynamoDB.DocumentClient) => {
    DB.adapter = new DynamoDBAdapter(client);
  };

  static createModel = <D extends DataSchema, K extends KeySchema>(
    modelOptions: CreateModelOptions,
  ) => {
    const hashKeyAttribute = find(modelOptions.attributes, ['hashKey', true]);
    const rangeKeyAttribute = find(modelOptions.attributes, ['rangeKey', true]);

    const schemaOptions = pick(modelOptions, [
      'attributes',
      'timestamp',
    ]) as SchemaOptions;
    const tableOptions = {
      hashKey: hashKeyAttribute!.name,
      rangeKey: rangeKeyAttribute!.name,
      ...pick(modelOptions, ['indexes', 'name', 'throughput']),
    } as TableOptions;

    DB.models[tableOptions.name] = DB.compileModel<D, K>(
      schemaOptions,
      tableOptions,
    ) as typeof Model;
    return DB.models[tableOptions.name];
  };

  private static compileModel = <D extends DataSchema, K extends KeySchema>(
    schemaOptions: SchemaOptions,
    tableOptions: TableOptions,
  ) => {
    const adapter = DB.adapter;
    const schema = new Schema(schemaOptions);
    const table = new Table(tableOptions);

    return class extends Model<D, K> {
      static adapter = adapter;
      static schema = schema;
      static table = table;
    };
  };
}
