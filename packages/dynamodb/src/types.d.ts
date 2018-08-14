import * as DynamoDB from 'aws-sdk/clients/dynamodb';

export type DataSchema = DynamoDB.DocumentClient.AttributeMap;
export type KeySchema = DynamoDB.DocumentClient.Key;

declare namespace Serverlize {
  namespace DynamoDB {  }
}
