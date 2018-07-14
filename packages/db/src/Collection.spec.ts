import Collection from './Collection';
import DB from './DB';
import Model from './Model';

const MODEL_OPTIONS = {
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

  indexes: [
    {
      name: 'byOwner',
      hashKey: 'ownerId',
      rangeKey: 'id',
      throughput: 1,
    },
  ],
};

describe('Collection', () => {
  let model: typeof Model;

  beforeAll(() => {
    model = DB.createModel(MODEL_OPTIONS);
  });

  it('should automatically convert items to model instances', () => {
    const collection = new Collection(model, [{ id: 'foo', ownerId: 'bar' }]);

    const allItems = collection.all();
    expect(allItems.length).toBe(1);
    allItems.map((item) => {
      expect(item).toBeInstanceOf(model);
    });
  });

  it('should merge and convert new items to model instances', () => {
    const oldCollection = new Collection(model, [
      { id: 'foo', ownerId: 'bar' },
    ]);
    const newCollection = oldCollection.merge([{ id: 'bar', ownerId: 'baz' }], {
      lastKey: { id: 'bar', ownerId: 'baz' },
      request: '{}',
    });

    const allItems = newCollection.all();
    expect(allItems.length).toBe(2);
    allItems.map((item) => {
      expect(item).toBeInstanceOf(model);
    });
  });
});
