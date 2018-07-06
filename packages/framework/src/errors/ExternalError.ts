import HttpError from './HttpError';

export default class ExternalError extends HttpError {
  constructor(
    reason: string,
    message: string = 'An unexpected error has occurred on an external service',
    statusCode: number = 500,
  ) {
    super(message, statusCode, reason);

    Object.setPrototypeOf(this, ExternalError.prototype);
  }
}
