import { Handler } from 'aws-lambda';

import { enhance, failure, success } from './lambda';

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
      before: () => {},
      after: () => {},
      onError: () => {},
    };
    const handler = enhance(mockHandler, [customMiddleware]);
    expect(handler['__middlewares']['before']!).toHaveLength(1);
    expect(handler['__middlewares']['after']!).toHaveLength(1);
    expect(handler['__middlewares']['onError']!).toHaveLength(1);
  });
});

describe('success()', () => {
  it('generates a valid successful response', () => {
    const body = { foo: 'bar' };
    const result = success(body);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(JSON.stringify(body));
  });
});

describe('failure()', () => {
  it('generates a valid failure response', () => {
    const error = new Error('This is a scary error!');
    const result = failure(error);

    expect(result.statusCode).toEqual(500);
    expect(JSON.parse(result.body)).toEqual({
      message: error.message,
      stack: error.stack,
      type: 'Error',
    });
  });
});
