import * as DynamoDB from 'aws-sdk/clients/dynamodb';

import AbstractExpression from './AbstractExpression';

type Inputs = DynamoDB.Types.QueryInput;
type KeyConditionOutput = Pick<
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
