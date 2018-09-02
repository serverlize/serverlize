import {
  AwsConstruct,
  ClassAnnotation,
  ZeroArgumentsConstructor,
} from '@serverlize/cdk';

export interface FunctionOptions {
  runtime: string;
}

export default (options: FunctionOptions): ClassAnnotation => {
  return (constructor: ZeroArgumentsConstructor<any>) => {
    constructor.prototype[AwsConstruct] = options;
  };
};
