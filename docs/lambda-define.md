---
id: lambda-define
title: Defining Functions
---

To get started, we will create a function. The easiest way to create one is
through the CLI:

```bash
$ slz function create ListPets --type http
```

Under `app/functions/`, there should now be a new file called `ListPets.ts`.
Inside it should look like the following:

```typescript
import { Lambda } from '@serverlize/framework';

const handler: Lambda.APIGatewayProxyHandler = async (event) => {
  return {
    event,
    message: 'Hello world from the Serverlize Framework!',
  };
};

export default handler;
```
