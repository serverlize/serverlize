import * as winston from 'winston';

import log from './log';

describe("log", () => {

  it("creates a logger", () => {

    expect(log).toBeInstanceOf(winston.Logger);
  });
});
