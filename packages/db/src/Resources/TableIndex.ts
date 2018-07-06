import * as DynamoDB from 'aws-sdk/clients/dynamodb';

import { KeyOptions, ThroughputOptions } from '../types';

export interface IndexOptions extends KeyOptions {
  global?: boolean;
  name?: string;
  projection?: DynamoDB.DocumentClient.ProjectionType;
  throughput: number | ThroughputOptions;
}

export default class TableIndex {
  public readonly hashKey: string;
  public readonly rangeKey: string;

  public readonly global: boolean;
  public readonly name: string;
  public readonly projection: DynamoDB.DocumentClient.ProjectionType;
  public readonly throughput: ThroughputOptions;

  constructor(options: IndexOptions) {
    this.hashKey = options.hashKey;
    this.rangeKey = options.rangeKey;

    this.global = options.global || false;
    this.name = options.name || `${this.hashKey}-${this.rangeKey}-Index`;
    this.projection = options.projection || 'ALL';

    this.throughput =
      typeof options.throughput === 'number'
        ? { read: options.throughput, write: options.throughput }
        : options.throughput;
  }
}
