import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import AbstractExpression from './AbstractExpression';

export type Inputs = DocumentClient.QueryInput;
export type KeyConditionOutput = Pick<
  Inputs,
  | 'KeyConditionExpression'
  | 'ExpressionAttributeNames'
  | 'ExpressionAttributeValues'
>;

export default class KeyCondition extends AbstractExpression<
  KeyConditionOutput
> {
  generate = () => {
    return {
      KeyConditionExpression: `#attribute ${this.operator} :value`,
      ExpressionAttributeNames: {
        '#attribute': this.attribute,
      },
      ExpressionAttributeValues: {
        ':value': this.value,
      },
    };
  };
}
