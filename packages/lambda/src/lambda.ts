import middy from '@middy/core';

import { Serverlize } from './types';

export function enhance(
  handler: Serverlize.Lambda.Handler,
  middlewareToApply: Serverlize.Lambda.Middleware[] = []
) {
  return middlewareToApply.reduce(
    (
      enhancedHandler: Serverlize.Lambda.EnhancedHandler,
      middleware: Serverlize.Lambda.Middleware
    ) => {
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
