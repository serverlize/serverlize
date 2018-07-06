import { AWSError } from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import AdapterInterface from './AdapterInterface';
import AwsError from './Errors/AwsError';
import ConditionalCheckFailed from './Errors/ConditionalCheckFailed';
import InternalServer from './Errors/InternalServer';
import ItemCollectionSizeLimitExceeded from './Errors/ItemCollectionSizeLimitExceeded';
import ProvisionedThroughputExceeded from './Errors/ProvisionedThroughputExceeded';
import ResourceNotFound from './Errors/ResourceNotFound';

export interface ErrorMap {
  [key: string]: typeof AwsError;
}

export default class DynamoDB implements AdapterInterface {
  public readonly client: DocumentClient;

  public readonly errors: ErrorMap = {
    ConditionalCheckFailedException: ConditionalCheckFailed,
    InternalServerError: InternalServer,
    ItemCollectionSizeLimitExceededException: ItemCollectionSizeLimitExceeded,
    ProvisionedThroughputExceededException: ProvisionedThroughputExceeded,
    ResourceNotFoundException: ResourceNotFound,
  };

  constructor(client: DocumentClient) {
    this.client = client;
  }

  batchGet = (
    params: DocumentClient.BatchGetItemInput
  ): Promise<DocumentClient.BatchGetItemOutput> => {
    return this.execute('batchGet', params);
  };

  batchWrite = (
    params: DocumentClient.BatchWriteItemInput
  ): Promise<DocumentClient.BatchWriteItemOutput> => {
    return this.execute('batchWrite', params);
  };

  delete = (
    params: DocumentClient.DeleteItemInput
  ): Promise<DocumentClient.DeleteItemOutput> => {
    return this.execute('delete', params);
  };

  get = (
    params: DocumentClient.GetItemInput
  ): Promise<DocumentClient.GetItemOutput> => {
    return this.execute('get', params);
  };

  put = (
    params: DocumentClient.PutItemInput
  ): Promise<DocumentClient.PutItemOutput> => {
    return this.execute('put', params);
  };

  update = (
    params: DocumentClient.UpdateItemInput
  ): Promise<DocumentClient.UpdateItemOutput> => {
    return this.execute('update', params);
  };

  query = (
    params: DocumentClient.QueryInput
  ): Promise<DocumentClient.QueryOutput> => {
    return this.execute('query', params);
  };

  scan = (
    params: DocumentClient.ScanInput
  ): Promise<DocumentClient.ScanOutput> => {
    return this.execute('scan', params);
  };

  private execute = (command: keyof AdapterInterface, params: any) => {
    try {
      return (this.client as any)[command](params).promise();
    } catch (error) {
      const errorClass = this.findError(error);
      throw new errorClass(error);
    }
  };

  private findError = (error: AWSError) => {
    return this.errors[error.code];
  };
}
