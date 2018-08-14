import {
  BatchGetOptions,
  DataMapper,
  GetOptions,
  QueryIterator,
  ScanIterator,
} from '@aws/dynamodb-data-mapper';
import Model from '../Model';
import { KeySchema } from '../types';
import AdapterInterface from './AdapterInterface';

export default class DynamoDB implements AdapterInterface {
  public readonly mapper: DataMapper;

  constructor(mapper: DataMapper) {
    this.mapper = mapper;
  }

  batchGet = (models: Model[], options: BatchGetOptions) => {
    return this.mapper.batchGet(models);
  };

  batchPut = (models: Model[]) => {
    return this.mapper.batchPut(models);
  };

  batchDelete = (models: Model[]) => {
    return this.mapper.batchPut(models);
  };

  delete = (model: Model) => {
    return this.mapper.delete(model);
  };

  get = (model: Model, options: GetOptions) => {
    return this.mapper.get(model);
  };

  put = (model: Model) => {
    return this.mapper.put(model);
  };

  update = (model: Model) => {
    return this.mapper.update(model);
  };

  query = (key: KeySchema, model: typeof Model): QueryIterator<Model> => {
    return this.mapper.query(model, key);
  };

  scan = (model: typeof Model): ScanIterator<Model> => {
    return this.mapper.scan(model);
  };
}
