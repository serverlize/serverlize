import * as DynamoDB from 'aws-sdk/clients/dynamodb';

import AbstractExpression from './AbstractExpression';

type Inputs = DynamoDB.Types.PutItemInput;
type ConditionOutput = Pick<Inputs, 'ConditionExpression' | 'ExpressionAttributeNames' | 'ExpressionAttributeValues'>

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
  }
}
