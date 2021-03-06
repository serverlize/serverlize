---
id: dynamodb-retrieve
title: Retrieving Models
---

Once you have created a model and its associated DynamoDB resource, you are
ready to start retrieving data from your database. Think of each model as a
powerful query builder allowing you to fluently query the database table
associated with the model. For example:

```typescript
import Pet from '@app/models/Pet';

const pets = Pet.all();

pets.forEach((pet) => {
  console.log(pet.name);
});
```

## Retrieving Single Models

```typescript
import Pet from '@app/models/Pet';

const pets = Pet.find({ id: '', createdAt:  });

pets.forEach((pet) => {
  console.log(pet.name);
});
```

## Aggregate operations

> @TODO

### Batch

> @TODO

### Scan

> @TODO

### Query

> @TODO

### Filters

> @TODO
