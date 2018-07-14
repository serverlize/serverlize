import log from './log';

describe('log', () => {
  it('creates a logger', () => {
    expect(log).toHaveProperty('info');
    expect(log).toHaveProperty('debug');
    expect(log).toHaveProperty('warn');
  });
});
