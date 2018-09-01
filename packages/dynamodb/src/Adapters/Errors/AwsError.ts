import { AWSError } from 'aws-sdk';

import BaseError from '../../Errors/BaseError';

export default class AwsError extends BaseError {
  protected code: string;

  constructor(error: AWSError, ...params: any[]) {
    super(...params);

    this.code = error.code;
    this.message = error.message;
    this.stack = error.stack;
  }
}
