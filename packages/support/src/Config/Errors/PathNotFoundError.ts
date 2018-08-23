import ConfigError from './ConfigError';

export interface PathNotFoundErrorProps {
  message: string;
  errno: number;
  code: 'ENOENT';
  syscall: 'open';
  path: string;
}

export default class PathNotFoundError extends ConfigError {
  name = 'PathNotFoundError';

  static fromError = (error: PathNotFoundErrorProps) => {
    const message = `Path \`${error.path}\` does not exist`;
    return new PathNotFoundError(message, error);
  };
}
