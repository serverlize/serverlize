// import { DynamoDB } from 'cloudform';

import SchemaAttribute, { SchemaAttributeOptions } from './SchemaAttribute';
import SchemaInterface from './SchemaInterface';

export interface SchemaOptions {
  attributes: SchemaAttributeOptions[];
  timestamps?: boolean | 'CREATED_AT' | 'UPDATED_AT';
}

export default class Schema implements SchemaInterface {

  attributes: SchemaAttribute[];

  constructor(options: SchemaOptions) {
    this.attributes = options.attributes.map((attribute) => {
      return new SchemaAttribute(attribute);
    });
  }

  generateCFN = () => {
    // return new DynamoDB.Table({
    // });
  }

  validate = (item: any) => {
    return !!item;
  }

}
