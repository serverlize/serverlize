---
id: dynamodb-modeller
title: DynamoDB
sidebar_label: DynamoDB
---

```typescript
// Pets.ts
import DB from '@serverlize/db';

const modelOptions = {
  name: 'pets',
  throughput: 1,

  attributes: [
    {
      name: 'id',
      type: String,
      hashKey: true,
    },
    {
      name: 'ownerId',
      type: String,
      rangeKey: true,
    },
  ],
};

interface PetKey {
  id: string;
  ownerId: string;
}

interface Pet extends PetKey {
  name: string;
}

export default DB.createModel<Pet, PetKey>(modelOptions);

// handler.ts
import enhance, {
  urlEncodeBodyParser,
  httpErrorHandler,
} from '@serverlize/lambda';

const middleware = [ urlEncodeBodyParser(), httpErrorHandler() ];

import Pets from './Pets.ts';

const handler = async (event) => {
  return Pets.get({ id: event.body.id , ownerId: event.body.ownerId });
}

export default enhance(handler, middleware);
```
