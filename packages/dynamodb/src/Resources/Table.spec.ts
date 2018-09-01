import Table from './Table';

const TABLE_OPTIONS = {
  name: 'pets',
  throughput: 1,
  hashKey: 'id',
  rangeKey: 'ownerId',

  indexes: [
    {
      name: 'byOwner',
      hashKey: 'ownerId',
      rangeKey: 'id',
      throughput: 1,
    },
  ],
};

describe('Table', () => {
  it('should throw an error if no table name is specified', () => {
    expect(() => {
      return new Table({
        ...TABLE_OPTIONS,
        name: '',
      });
    }).toThrowError('No table name specified');
  });

  it('should parse simplified throughput value', () => {
    const table = new Table(TABLE_OPTIONS);
    expect(table.throughput).toEqual({ read: 1, write: 1 });
  });

  it('should parse complete throughput value', () => {
    const table = new Table({
      ...TABLE_OPTIONS,
      throughput: { read: 1, write: 1 },
    });
    expect(table.throughput).toEqual({ read: 1, write: 1 });
  });

  it('should set up indexes', () => {
    const table = new Table(TABLE_OPTIONS);
    expect(table.indexes).toHaveLength(1);
  });
});
