import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import Collection from '../Collection';
import AbstractRequest, { ExecOptions } from './AbstractRequest';

export default class Scan extends AbstractRequest {
  public exec = async (options?: ExecOptions) => {
    const request: DocumentClient.ScanInput = {
      TableName: this.model.table.name,
      ...options,
    };

    if (this.index) {
      request.IndexName = this.index.name;
    }

    const { Items, LastEvaluatedKey } = await this.model.adapter.scan(request);

    if (!Items) {
      return new Collection(this.model, []);
    }

    if (!LastEvaluatedKey) {
      return new Collection(this.model, Items);
    }

    return new Collection(this.model, Items, {
      lastKey: LastEvaluatedKey,
      request: JSON.stringify({ scan: request }),
    });
  };
}
