// export * from './Commands/Deploy';

export interface ZeroArgumentsConstructor<T = any> {
  new (): T;
}
export interface ClassAnnotation {
  (target: ZeroArgumentsConstructor): void;
}

export const AwsConstruct = Symbol('AwsConstruct');
