---
id: getting-started-installation
title: Installation
sidebar_label: Installation
---

## Installation

Serverlize is just a fancy wrapper around Serverless, so if you're familiar with it this should be a cakewalk.

The easiest way to get started is to clone `serverlize-starter` as follows:

```bash
$ git clone https://github.com/serverlize/serverlize-starter
$ cd serverlize-starter
$ yarn
```

<< MAYBE MAKE A `create-serverlize-app` >>

Once inside the project, you should have a folder structure as follows:

<< Copy output of `tree` >>

## Creating your first event

```bash
$ slz event create hello --path /
```

You should now see a new folder under `functions/` called `hello`. Inside are two files, `handler.ts` and `function.yml`.

Now run `yarn deploy:dev`.

## Creating your first model

```sh
$ slz model create --name pets --hashKey id:S --rangeKey ownerId:S --autoscaling 5,5
```

A new file named `Pets` should now exist at `app/models/Pets.ts`. After opening it in your text editor, you should see the following:

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
