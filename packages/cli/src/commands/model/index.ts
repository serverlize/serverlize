import { Command, flags as Flags } from '@oclif/command';

export default class ModelCommand extends Command {
  static description = '';

  static examples = ['$ slz model create'];

  static flags = {
    help: Flags.help({ char: 'h' }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' }),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: 'n', description: 'name to print' }),
  };

  static args = [{ name: 'name' }];

  async run() {
    const { args, flags } = this.parse(ModelCommand);

    const name = flags.name || 'world';
    this.log(
      `hello ${name} from .${module.filename.replace(process.cwd(), '')}`,
    );
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
