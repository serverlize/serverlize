import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import AbstractExpression from './AbstractExpression';

export type Inputs = DocumentClient.ScanInput | DocumentClient.QueryInput;
export type FilterOutput = Pick<
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
