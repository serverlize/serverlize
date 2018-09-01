import { AWSError } from 'aws-sdk';
import AwsError from './AwsError';

export default class ConditionalCheckFailed extends AwsError {
  constructor(error: AWSError, ...params: any[]) {
    super(error, ...params);
  }
}
