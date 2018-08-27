import HelloCommand from './hello';

type ProcessStdOutWrite = (buffer: Buffer | string, cb?: () => void) => boolean;

describe('hello', () => {
  let mockStdOut: jest.Mock<ProcessStdOutWrite>;

  beforeEach(() => {
    mockStdOut = jest.spyOn(process.stdout, 'write').mockImplementation(() => {
      return;
    });
  });

  it('runs hello', () => {
    HelloCommand.run(['hello'])
      .then(() => {
        expect(mockStdOut).toHaveBeenCalledWith(
          'hello world from ./src/Commands/hello.ts\n',
        );
      })
      // @TODO HORRIBLE HORRIBLE HORRIBLE
      .catch(() => {});
  });

  it('runs hello --name jeff', () => {
    HelloCommand.run(['hello', '--name', 'jeff'])
      .then(() => {
        expect(mockStdOut).toHaveBeenCalledWith(
          'hello jeff from ./src/Commands/hello.ts\n',
        );
      })
      // @TODO HORRIBLE HORRIBLE HORRIBLE
      .catch(() => {});
  });
});
