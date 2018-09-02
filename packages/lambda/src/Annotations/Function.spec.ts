import { AwsConstruct } from '@serverlize/cdk';

import Function from './Function';

describe('Function', () => {
  it('should bind the provided function to the target using the `AwsConstruct` protocol', () => {
    class Handler {}
    const functionOptions = { runtime: 'nodejs8.10' };
    const decorator = Function(functionOptions);
    decorator(Handler);

    expect((new Handler() as any)[AwsConstruct]).toBe(functionOptions);
  });
});
