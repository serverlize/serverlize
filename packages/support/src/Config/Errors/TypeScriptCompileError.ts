import ConfigError from './ConfigError';

export interface TypeScriptCompileErrorProps {
  message: string;
}

const TS_ERROR_MESSAGE =
  'TypeScript compiler encountered syntax errors while transpiling. Errors: ';

export default class TypeScriptCompileError extends ConfigError {
  name = 'TypeScriptCompileError';

  static fromError = (error: TypeScriptCompileErrorProps) => {
    const message = [
      'Failed to compile TypeScript: ',
      error.message.replace(TS_ERROR_MESSAGE, ''),
    ].join('');

    return new TypeScriptCompileError(message, error);
  };
}
