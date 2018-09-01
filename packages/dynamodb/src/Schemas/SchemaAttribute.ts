export type ScalarConstructor = NumberConstructor | StringConstructor;

export interface SchemaAttributeOptions {
  name: string;
  type: ScalarConstructor;

  hashKey?: boolean;
  rangeKey?: boolean;
}

export default class SchemaAttribute {
  name: string;
  type: ScalarConstructor;

  hashKey: boolean;
  rangeKey: boolean;

  constructor(options: SchemaAttributeOptions) {
    this.name = options.name;
    this.type = options.type;

    this.hashKey = !!options.hashKey;
    this.rangeKey = !!options.rangeKey;
  }

  validate = (item: any) => {
    return !!item;
  };
}
