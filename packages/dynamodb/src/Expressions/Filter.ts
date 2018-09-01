import * as DynamoDB from 'aws-sdk/clients/dynamodb';

import AbstractExpression from './AbstractExpression';

type Inputs = DynamoDB.Types.ScanInput | DynamoDB.Types.QueryInput;
type FilterOutput = Pick<
  Inputs,
  'FilterExpression' | 'ExpressionAttributeNames' | 'ExpressionAttributeValues'
>;

export default class Filter extends AbstractExpression<FilterOutput> {
  generate = () => {
    return {
      FilterExpression: `#attribute ${this.operator} :value`,
      ExpressionAttributeNames: {
        '#attribute': this.attribute,
      },
      ExpressionAttributeValues: {
        ':value': this.value,
      },
    };
  };
}
