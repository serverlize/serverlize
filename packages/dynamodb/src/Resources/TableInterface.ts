import { ThroughputOptions } from '../types';
import TableIndex from './TableIndex';

export default interface TableInterface {
  readonly hashKey: string;
  readonly rangeKey: string;

  readonly indexes?: TableIndex[];
  readonly name: string;
  readonly throughput: ThroughputOptions;
}
