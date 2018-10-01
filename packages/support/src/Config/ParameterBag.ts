import get from 'lodash.get';
import has from 'lodash.has';

export default class ParameterBag<T extends object> {
  config: T;

  constructor(config: T) {
    this.config = config;
  }

  has = (path: string) => {
    return has(this.config, path);
  };

  get = (path: string, defaultValue?: string) => {
    return get(this.config, path, defaultValue);
  };

  all = (): T => {
    return this.config;
  };
}
