import path from 'path';

import CosmiConfigAdapter from './Adapters/CosmiConfigAdapter';
import Explorer from './Explorer';

const FIXTURES_PATH = path.resolve(__dirname, '__fixtures__');
const RESULT = require(path.resolve(FIXTURES_PATH, '.serverlize.config.ts'))
  .default;

describe('Explorer', () => {
  let explorer: Explorer;

  beforeEach(() => {
    explorer = new Explorer(new CosmiConfigAdapter());
  });

  it('creates a new Explorer class', () => {
    expect(explorer).toBeInstanceOf(Explorer);
  });

  it('loads config from `.serverlize.config.ts`', async () => {
    const config = await explorer.load(
      path.resolve(FIXTURES_PATH, '.serverlize.config.ts'),
    );
    expect(config.all()).toEqual(RESULT);
  });

  it('loads config from `.serverlize.config.js`', async () => {
    const config = await explorer.load(
      path.resolve(FIXTURES_PATH, '.serverlize.config.js'),
    );
    expect(config.all()).toEqual(RESULT);
  });

  // it('searches and loads config', async () => {
  //   const config = await loader.search('./');
  //   expect(config.all()).toEqual({ foo: 'bar' });
  // });
});
