---
id: lambda-middleware
title: Middleware
sidebar_label: Middleware
---

Serverlize provides a powerful middleware engine through [MiddyJS][link-middyjs]. This also means that any middleware written for use with MiddyJS will work with Serverlize.

```typescript
import urlEncodeBodyParser from '@middy/http-urlencode-body-parser';
import httpErrorHandler from '@middy/http-error-handler';
import enhance from '@serverlize/lambda';

const middleware = [ urlEncodeBodyParser(), httpErrorHandler() ];

const handler = async (event, context) => {
  // Core logic
}

export default enhance(handler, middleware);
```

## Custom middleware

A middleware object conforms to the `Serverlize.Lambda.Middleware` type, which requires one of the following to be defined:

 - `before`: This function is called before the handler function is invoked
 - `after`: This function is called after the handler function is invoked
 - `onError`: This function is called if the handler function throws an error

All three events conform to the `Serverlize.Lambda.MiddlewareFunction` type

## Inline middleware

Middleware can also be created on-the-fly, as the following example illustrates:

```typescript
import urlEncodeBodyParser from '@middy/http-urlencode-body-parser';
import httpErrorHandler from '@middy/http-error-handler';
import enhance from '@serverlize/lambda';

const middleware = [ urlEncodeBodyParser(), httpErrorHandler() ];

const handler = async (event, context) => {
  // Core logic
}

handler.before((handler, next) => {
  // Do something before handler is invoked
});

export default enhance(handler, middleware);
```


[link-middyjs]: https://middy.js.org/
