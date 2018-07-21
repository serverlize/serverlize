// import Serverless from 'serverless-types';

import Plugin from './plugin';

describe('Plugin', () => {
  it('creates a response object', async () => {
    const plugin = new Plugin({ service: { provider: { stage: 'foo' } } });

    const response = await plugin.parseOptions();
    expect(response).toEqual({ foo: 'bar' });
  });
});
