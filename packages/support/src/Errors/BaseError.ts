import { BaseError } from 'make-error';

export default class Error extends BaseError {
  toObject = () => {
    return {
      message: this.message,
      name: this.name,
      stack: this.stack,
    };
  };
}
