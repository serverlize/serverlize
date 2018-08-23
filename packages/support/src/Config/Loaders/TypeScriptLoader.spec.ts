import path from 'path';

import TypeScriptCompileError from '../Errors/TypeScriptCompileError';
import loader from './TypeScriptLoader';

const FIXTURES_PATH = path.resolve(__dirname, '__fixtures__');

describe('TypeScriptLoader', () => {
  it('compiles a valid TypeScript file', async () => {
    const result = await loader(path.resolve(FIXTURES_PATH, 'success'));
    expect(result).toEqual({ foo: 'bar' });
  });

  it('fails to compile an invalid TypeScript file', async () => {
    try {
      const result = await loader(path.resolve(FIXTURES_PATH, 'error'));
    } catch (error) {
      expect(error).toBeInstanceOf(TypeScriptCompileError);
      expect(error.toObject().message).toMatch(
        'Failed to compile TypeScript: Expression expected',
      );
    }
  });
});
