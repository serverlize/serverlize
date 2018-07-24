---
id: lambda-middleware
title: Lambda Middleware
sidebar_label: Middleware
---

Serverlize provides a powerful middleware engine through [MiddyJS][link-middyjs]. This means that any middleware written for use with MiddyJS will work with Serverlize.

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

A middleware object is a simple object that defines one or more of the following keys:

    - `before`: This function is called before the Lambda is executed
    - `after`: This function is called after the Lambda is executed
    - `onError`: This function is called if the Lambda throws an error

All three events have the same signature:

```typescript
function (handler: IHandlerLambda, next: IMiddyNextFunction): void | Promise<any> {
  // ...
}
```

## Inline middleware



[link-middyjs]: https://middy.js.org/
