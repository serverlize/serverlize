---
id: dynamodb-insert-update
title: Inserting/Updating Models
---

## Inserts

To create a new record, create a new model instance, set attributes on the
model and call its' `save()` method:

```typescript
const myPet = new Pet({ id: 1, name: 'Doggy' });
await myPet.save();
```

Alternatively, you can use `create()` to instantly create the record in
DynamoDB:

```typescript
const myPet = await Pet.create({ id: 1, name: 'Doggy' });
```

## Updates

> @TODO

## Aggregate operations

> @TODO

### Batch

> @TODO
