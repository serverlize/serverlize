export interface IErrorResponseBody {
  type: string;
  message: string;
  reason?: string;
  statusCode: number;
}

export default class HttpError extends Error {
  public message: string;
  public statusCode: number;
  public reason: string;

  constructor(
    message: string,
    statusCode: number = 500,
    reason: string = '',
  ) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.reason = reason;

    Object.setPrototypeOf(this, HttpError.prototype);
  }

  public toJson = (): IErrorResponseBody => {
    return {
      type: this.constructor.name,
      message: this.message,
      reason: this.reason,
      statusCode: this.statusCode,
    };
  }
}
