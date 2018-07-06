import * as winston from 'winston';

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      json: false,
      colorize: false,
      level: 'info',
      stringify: true,
    }),
  ],
});

export default logger;
