import { Command, flags as Flags } from '@oclif/command';

export default class ModelCreateCommand extends Command {
  static description = 'Create a model';

  static examples = ['$ slz model create'];

  static flags = {
    help: Flags.help({ char: 'h' }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' }),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: 'n', description: 'name to print' }),

    hashKey: Flags.string({
      char: 'h',
      description: 'Hash key for the table',
      required: true,
    }),
    rangeKey: Flags.string({
      char: 'r',
      description: 'Range key for the table',
    }),
    capacity: Flags.string({
      char: 'c',
      description: 'Read/write capacities for the table',
    }),
    autoscale: Flags.string({
      char: 'a',
      description: 'Set autoscaling parameters for the table',
    }),
  };

  static args = [{ name: 'name' }];

  async run() {
    const { args, flags } = this.parse(ModelCreateCommand);

    const name = flags.name || 'world';
    this.log(
      `hello ${name} from .${module.filename.replace(process.cwd(), '')}`,
    );
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
