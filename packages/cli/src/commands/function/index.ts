import { Command, flags as Flags } from '@oclif/command';

export default class FunctionCommand extends Command {
  static description = 'describe the command here';

  static examples = ['$ slz function create'];

  static flags = {
    help: Flags.help({ char: 'h' }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' }),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: 'n', description: 'name to print' }),
  };

  static args = [{ name: 'file' }];

  async run() {
    const { args, flags } = this.parse(FunctionCommand);

    const name = flags.name || 'world';
    this.log(
      `hello ${name} from .${module.filename.replace(process.cwd(), '')}`,
    );
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
