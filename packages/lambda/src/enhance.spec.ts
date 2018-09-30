import { Handler } from 'aws-lambda';

import enhance from './enhance';

// tslint:disable-next-line:no-console
const mockHandler: Handler = (...params: any[]) => {
  console.log(params);
};

describe('enhance()', () => {
  it('wraps a Lambda function properly', () => {
    const handler = enhance(mockHandler);
    expect(handler).toHaveProperty('use');
    expect(handler).toHaveProperty('before');
    expect(handler).toHaveProperty('after');
    expect(handler).toHaveProperty('onError');
  });

  it('adds middleware correctly', () => {
    const customMiddleware = {
      // tslint:disable:no-empty
      after: () => {},
      before: () => {},
      onError: () => {},
      // tslint:enable:no-empty
    };
    const handler = enhance(mockHandler, [customMiddleware]);
    expect((handler as any)['__middlewares']['before']!).toHaveLength(1);
    expect((handler as any)['__middlewares']['after']!).toHaveLength(1);
    expect((handler as any)['__middlewares']['onError']!).toHaveLength(1);
  });
});
