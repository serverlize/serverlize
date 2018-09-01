import { KeyOptions, ThroughputOptions } from '../types';
import TableIndex, { IndexOptions } from './TableIndex';
import TableInterface from './TableInterface';

export interface TableOptions extends KeyOptions {
  indexes?: IndexOptions[];
  name: string;
  throughput: number | ThroughputOptions;
}

export default class Table implements TableInterface {
  public readonly hashKey: string;
  public readonly rangeKey: string;

  public readonly indexes?: TableIndex[];
  public readonly name: string;
  public readonly throughput: ThroughputOptions;

  constructor(options: TableOptions) {
    this.hashKey = options.hashKey;
    this.rangeKey = options.rangeKey;

    this.indexes = (options.indexes || []).map((index) => {
      return new TableIndex(index);
    });

    this.name = options.name;
    if (!this.name) {
      throw new Error('No table name specified');
    }

    this.throughput =
      typeof options.throughput === 'number'
        ? { read: options.throughput, write: options.throughput }
        : options.throughput;
  }
}
