export default class BaseError extends Error {

  constructor(...params: any[]) {
    super(...params);

    Object.setPrototypeOf(this, BaseError.prototype);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseError);
    }
  }

  // public toJson = () => {
  //   return {
  //     type: this.constructor.name,
  //     message: this.message,
  //     code: this.code,
  //   };
  // }
}
