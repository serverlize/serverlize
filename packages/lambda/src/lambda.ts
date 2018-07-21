import middy from '@middy/core';

import { EnhancedHandler, Handler, LambdaMiddleware } from './types';

export * from './types';

export function enhance(
  handler: Handler,
  middlewareToApply: LambdaMiddleware[] = []
) {
  return middlewareToApply.reduce(
    (enhancedHandler: EnhancedHandler, middleware: LambdaMiddleware) => {
      return enhancedHandler.use(middleware);
    },
    middy(handler)
  );
}

export function success(body: {}, statusCode = 200) {
  return {
    body: JSON.stringify(body),
    statusCode,
  };
}

export function failure(error: Error, statusCode = 500) {
  return {
    body: JSON.stringify({
      type: error.constructor.name,
      message: error.message,
      stack: error.stack,
    }),
    statusCode,
  };
}
