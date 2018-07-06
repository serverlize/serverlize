# Lambda

```typescript
import enhance, {
  urlEncodeBodyParser,
  httpErrorHandler,
} from '@serverlize/lambda';

const middleware = [ urlEncodeBodyParser(), httpErrorHandler() ];

const handler = async (event, context) => {
  // Your code
}

export default enhance(handler, middleware);
```
