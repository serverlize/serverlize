---
id: getting-started-create-model
title: Create a Model
sidebar_label: Create a Model
---

From the project root, type the following command into your terminal:

```bash
$ slz model create --name pets --hashKey id:S --rangeKey ownerId:S --autoscaling 5,5
```

A new file named `Pets` should now exist at `app/models/Pets.ts`. After 
opening it in your text editor, you should see the following:

```typescript
import DB from '@serverlize/db';

interface PetKey {
  id: string;
  ownerId: string;
}

interface Pet extends PetKey {
  name: string;
}

export default DB.createModel<Pet, PetKey>({
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
});
```

Now, open `functions/hello/handler.ts` and change it to the following:

```typescript
// handler.ts
import enhance, {
  urlEncodeBodyParser,
  httpErrorHandler,
} from '@serverlize/lambda';

const middleware = [ urlEncodeBodyParser(), httpErrorHandler() ];

import Pets from '@app/models/Pets.ts';

const handler = async (event) => {
  return Pets.get({ id: event.body.id , ownerId: event.body.ownerId });
};

export default enhance(handler, middleware);
```
