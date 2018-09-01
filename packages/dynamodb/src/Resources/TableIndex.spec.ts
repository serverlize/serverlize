import TableIndex from './TableIndex';

const INDEX_OPTIONS = {
  name: 'byOwner',
  hashKey: 'ownerId',
  rangeKey: 'id',
  throughput: 1,
};

describe('TableIndex', () => {
  it('should parse throughput value', () => {
    const tableIndex = new TableIndex(INDEX_OPTIONS);
    expect(tableIndex.throughput).toEqual({ read: 1, write: 1 });
  });

  it('should automatically generate a name', () => {
    const tableIndex = new TableIndex({
      ...INDEX_OPTIONS,
      name: '',
    });

    const expectedIndexName = `${INDEX_OPTIONS.hashKey}-${
      INDEX_OPTIONS.rangeKey
    }-Index`;
    expect(tableIndex.name).toEqual(expectedIndexName);
  });
});
