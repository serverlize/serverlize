import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export default interface AdapterInterface {
  readonly client: DocumentClient;

  /**
   * Returns the attributes of one or more items from one or more tables by delegating to AWS.DynamoDB.batchGetItem().
   */
  batchGet(
    params: DocumentClient.BatchGetItemInput
  ): Promise<DocumentClient.BatchGetItemOutput>;
  /**
   * Puts or deletes multiple items in one or more tables by delegating to AWS.DynamoDB.batchWriteItem().
   */
  batchWrite(
    params: DocumentClient.BatchWriteItemInput
  ): Promise<DocumentClient.BatchWriteItemOutput>;
  /**
   * Deletes a single item in a table by primary key by delegating to AWS.DynamoDB.deleteItem().
   */
  delete(
    params: DocumentClient.DeleteItemInput
  ): Promise<DocumentClient.DeleteItemOutput>;
  /**
   * Returns a set of attributes for the item with the given primary key by delegating to AWS.DynamoDB.getItem().
   */
  get(
    params: DocumentClient.GetItemInput
  ): Promise<DocumentClient.GetItemOutput>;
  /**
   * Creates a new item, or replaces an old item with a new item by delegating to AWS.DynamoDB.putItem().
   */
  put(
    params: DocumentClient.PutItemInput
  ): Promise<DocumentClient.PutItemOutput>;
  /**
   * Edits an existing item's attributes, or adds a new item to the table if it does not already exist by delegating to AWS.DynamoDB.updateItem().
   */
  update(
    params: DocumentClient.UpdateItemInput
  ): Promise<DocumentClient.UpdateItemOutput>;
  /**
   * Directly access items from a table by primary key or a secondary index.
   */
  query(params: DocumentClient.QueryInput): Promise<DocumentClient.QueryOutput>;
  /**
   * Returns one or more items and item attributes by accessing every item in a table or a secondary index.
   */
  scan(params: DocumentClient.ScanInput): Promise<DocumentClient.ScanOutput>;
}
