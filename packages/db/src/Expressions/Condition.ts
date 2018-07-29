import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import AbstractExpression from './AbstractExpression';

export type Inputs = DocumentClient.PutItemInput;
export type ConditionOutput = Pick<
  Inputs,
  | 'ConditionExpression'
  | 'ExpressionAttributeNames'
  | 'ExpressionAttributeValues'
>;

export default class Condition extends AbstractExpression<ConditionOutput> {
  generate = () => {
    return {
      ConditionExpression: `#attribute ${this.operator} :value`,
      ExpressionAttributeNames: {
        '#attribute': this.attribute,
      },
      ExpressionAttributeValues: {
        ':value': this.value,
      },
    };
  };
}
