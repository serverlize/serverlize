import AdapterInterface from './Adapters/AdapterInterface';
import PathNotFoundError from './Errors/PathNotFoundError';
import Explorer from './Explorer';

interface MockError extends Error {
  code: string;
  errno: number;
  path: string;
}

class MockAdapter implements AdapterInterface {
  config: {};

  constructor() {
    this.config = {
      foo: 'bar',
    };
  }

  load = async (path: string) => {
    if (path === './error') {
      const error = new Error('File not found') as MockError;
      error['code'] = 'ENOENT';
      error['errno'] = -2;
      error['path'] = '/';
      throw error;
    }

    return {
      config: this.config,
      path,
    };
  };

  search = async (path: string) => {
    return {
      config: this.config,
      path,
    };
  };
}

describe('Explorer', () => {
  let loader: Explorer;

  beforeEach(() => {
    loader = new Explorer(new MockAdapter());
  });

  it('creates a new Explorer class', () => {
    expect(loader).toBeInstanceOf(Explorer);
  });

  it('loads config', async () => {
    const config = await loader.load('./');
    expect(config.all()).toEqual({ foo: 'bar' });
  });

  it('throws a `PathNotFoundError` error if the path is invalid', async () => {
    try {
      await loader.load('./error');
    } catch (error) {
      expect(error).toBeInstanceOf(PathNotFoundError);
    }
  });

  // it('searches and loads config', async () => {
  //   const config = await loader.search('./');
  //   expect(config.all()).toEqual({ foo: 'bar' });
  // });
});
