import ExternalError from './ExternalError';

describe('ExternalError', () => {
  it('has the correct attributes', () => {
    const error = new ExternalError('This is an error!');

    expect(error.toJson()).toEqual({
      message: 'An unexpected error has occurred on an external service',
      reason: 'This is an error!',
      statusCode: 500,
      type: 'ExternalError',
    });
  });
});
