import BaseError from '../../Errors/BaseError';

export default abstract class ConfigError extends BaseError {
  options: {};

  constructor(message: string, options: {}) {
    super(message);

    this.options = options;
    Object.defineProperty(this, 'options', {
      enumerable: false,
    });
  }
}
