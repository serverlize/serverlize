import get from 'lodash.get';
import has from 'lodash.has';

export default class ParameterBag {
  config: {};

  constructor(config: {}) {
    this.config = config;
  }

  has = (path: string) => {
    return has(this.config, path);
  };

  get = (path: string, defaultValue?: string) => {
    return get(this.config, path, defaultValue);
  };

  all = () => {
    return this.config;
  };
}
