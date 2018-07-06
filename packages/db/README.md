# @serverlize/db

## Features

- Promise-based
- Soft-deletes
- TTLs
- Can output CloudFormation template snippets

## Installation

## API

```typescript
import DB from '@serverlize/db';

const schemaOptions = {
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

const tableOptions = {
  tableName: 'pets',
  throughput: 1,
  hashKey: 'id',
  rangeKey: 'ownerId',
};

interface PetKey {
  id: string;
  ownerId: string;
}

interface Pet extends PetKey {
  name: string;
}

const Pets = DB.createModel<Pet, PetKey>(schemaOptions, tableOptions);

// Create a new pet
const myPet = new Pets({ id: 'a', ownerId: '1' });
myPet.save();
// OR
const myPet = await Pets.create({ id: 'a', ownerId: '1' });
console.log(myPet.toJson());

// Get a pet
const myPet = await Pets.get({ id: 'a', ownerId: '1' });
console.log(myPet.toJson());

// Delete a pet
await Pets.delete({ id: 'a', ownerId: '1' });

// Update a pet
const myPet = await Pets.update({ id: 'a', 'ownerId': 1, name: 'His Foxiness' });
console.log(myPet.toJson());
// OR
const myPet = await Pets.get({ id: 'a', 'ownerId': 1, name: 'His Foxiness' });
await myPet.update({ name: 'His Foxiness' });

// Scanning the table
const allMyPets = await Pets.scan.all();
// OR
const filter = {
  Filter: 'id= :id',
  ExpressionAttributeValues: {
    ':id': '1'
  }
};
const filteredPets = await Pets.scan.filter(filter);

// Querying the table
const someOfMyPets = await Pets.query.where({ id: '1' });
const someOfMyPets = await Pets.query.where({ id: '1' });
```
