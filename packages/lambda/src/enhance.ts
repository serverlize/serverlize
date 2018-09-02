import middy from '@middy/core';

import { Serverlize } from './types';

/**
 * Enhances a Lambda function by wrapping it with the `middy` handler and
 * any provided middleware.
 * @param {Serverlize.Lambda.Handler} handler
 * @param {Serverlize.Lambda.Middleware[]} middlewareToApply
 * @returns {any}
 */
export default function enhance(
  handler: Serverlize.Lambda.Handler,
  middlewareToApply: Serverlize.Lambda.Middleware[] = [],
) {
  return middlewareToApply.reduce(
    (
      enhancedHandler: Serverlize.Lambda.EnhancedHandler,
      middleware: Serverlize.Lambda.Middleware,
    ) => {
      return enhancedHandler.use(middleware);
    },
    middy(handler),
  );
}
