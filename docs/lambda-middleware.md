---
id: lambda-middleware
title: Middleware
---

Serverlize provides a powerful middleware engine through [MiddyJS][link-middyjs].
This also means that any middleware written for use with MiddyJS will work just
as well with Serverlize.

```typescript
import jsonBodyParser from '@middy/http-json-body-parser';
import httpErrorHandler from '@middy/http-error-handler';
import { Lambda } from '@serverlize/framework';

const middleware = [ jsonBodyParser(), httpErrorHandler() ];

const handler = async (event, context) => {
  // Business logic goes here
};

export default Lambda.enhance(handler, middleware);
```

## Available middleware

- [`cache`][link-middy-cache]:
  A simple but flexible caching layer.
- [`do-not-wait-for-empty-event-loop`][link-middy-do-not-wait-for-empty-event-loop]:
  Sets `callbackWaitsForEmptyEventLoop` property to `false`.
- [`http-content-negotiation`][link-middy-http-content-negotiation]:
  Parses `Accept-*` headers and provides utilities for content negotiation
  (charset, encoding, language and media type) for HTTP requests.
- [`http-cors`][link-middy-http-cors]:
  Sets HTTP CORS headers on response.
- [`http-error-handler`][link-middy-http-error-handler]:
  Creates a proper HTTP response for errors that are created with the
  [http-errors][link-middy-http-error-handler] module and represents proper
  HTTP errors.
- [`http-event-normalizer`][link-middy-http-event-normalizer]:
  Normalizes HTTP events by adding an empty object for
  `queryStringParameters` and `pathParameters` if they are missing.
- [`http-header-normalizer`][link-middy-http-header-normalizer]:
  Normalizes HTTP header names to their canonical format.
- [`http-json-body-parser`][link-middy-http-json-body-parser]:
  Automatically parses HTTP requests with JSON body and converts the body
  into an object. Also handles gracefully broken JSON if used in combination
  with `http-error-handler`.
- [`http-partial-response`][link-middy-http-partial-response]:
  Filter response objects attributes based on query string parameters.
- [`http-urlencode-body-parser`][link-middy-http-urlencode-body-parser]:
  Automatically parses HTTP requests with URL encoded body (typically the
  result of a form submit).
- [`s3-key-normalizer`][link-middy-s3-key-normalizer]:
  Normalizes key names in s3 events.
- [`ssm`][link-middy-ssm]:
  Fetches parameters from [AWS Systems Manager Parameter Store][link-parameter-store].
- [`validator`][link-middy-validator]:
  Automatically validates incoming events and outgoing responses against
  custom schemas.
- [`warmup`][link-middy-warmup]:
  Warmup middleware that helps to reduce the [cold-start issue][link-cold-start]

## Custom middleware

A middleware object conforms to the `Serverlize.Lambda.Middleware` type, which
requires one of the following to be defined:

- `before`: This function is called before the handler function is invoked
- `after`: This function is called after the handler function is invoked
- `onError`: This function is called if the handler function throws an error

All three events conform to the `Serverlize.Lambda.MiddlewareFunction` type

## Inline middleware

Middleware can also be created on-the-fly, as the following example illustrates:

```typescript
import { Lambda } from '@serverlize/framework';

const handler = async (event, context) => {
  // Core logic
};

handler.before((handler, next) => {
  // Do something before handler is invoked
});

export default Lambda.enhance(handler);
```

[link-middyjs]: https://middy.js.org/
[link-middy-cache]: https://github.com/middyjs/middy/tree/1.0.0-alpha/packages/cache
[link-middy-do-not-wait-for-empty-event-loop]: https://github.com/middyjs/middy/tree/1.0.0-alpha/packages/do-not-wait-for-empty-event-loop
[link-middy-http-content-negotiation]: https://github.com/middyjs/middy/tree/1.0.0-alpha/packages/http-content-negotiation
[link-middy-http-cors]: https://github.com/middyjs/middy/tree/1.0.0-alpha/packages/http-cors
[link-middy-http-error-handler]: https://github.com/middyjs/middy/tree/1.0.0-alpha/packages/http-error-handler
[link-middy-http-event-normalizer]: https://github.com/middyjs/middy/tree/1.0.0-alpha/packages/http-event-normalizer
[link-middy-http-header-normalizer]: https://github.com/middyjs/middy/tree/1.0.0-alpha/packages/http-header-normalizer
[link-middy-http-json-body-parser]: https://github.com/middyjs/middy/tree/1.0.0-alpha/packages/http-json-body-parser
[link-middy-http-partial-response]: https://github.com/middyjs/middy/tree/1.0.0-alpha/packages/http-partial-response
[link-middy-http-urlencode-body-parser]: https://github.com/middyjs/middy/tree/1.0.0-alpha/packages/http-urlencode-body-parser
[link-middy-s3-key-normalizer]: https://github.com/middyjs/middy/tree/1.0.0-alpha/packages/s3-key-normalizer
[link-middy-ssm]: https://github.com/middyjs/middy/tree/1.0.0-alpha/packages/ssm
[link-middy-validator]: https://github.com/middyjs/middy/tree/1.0.0-alpha/packages/validator
[link-middy-warmup]: https://github.com/middyjs/middy/tree/1.0.0-alpha/packages/warmup

[link-parameter-store]: https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-paramstore.html
[link-cold-start]: https://serverless.com/blog/keep-your-lambdas-warm/
