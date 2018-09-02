import { Handler } from 'aws-lambda';

import enhance from './enhance';

const mockHandler: Handler = (...params: any[]) => {};

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
      after: () => {},
      before: () => {},
      onError: () => {},
    };
    const handler = enhance(mockHandler, [customMiddleware]);
    expect(handler['__middlewares']['before']!).toHaveLength(1);
    expect(handler['__middlewares']['after']!).toHaveLength(1);
    expect(handler['__middlewares']['onError']!).toHaveLength(1);
  });
});
