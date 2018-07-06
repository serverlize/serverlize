import * as DynamoDB from 'aws-sdk/clients/dynamodb';

export type DataSchema = DynamoDB.DocumentClient.AttributeMap;
export type KeySchema = DynamoDB.DocumentClient.Key;

export interface KeyOptions {
  hashKey: string;
  rangeKey: string;
}

export interface ThroughputOptions {
  [key: string]: number;
  read: number;
  write: number;
}

export interface Cursor {
  [key: string]: string | KeySchema;
  lastKey: KeySchema;
  request: string;
}
