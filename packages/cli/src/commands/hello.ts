import { Command, flags as Flags } from '@oclif/command';

export default class Hello extends Command {
  static description = 'describe the command here';

  static examples = [
    `$ slz hello
hello world from ./src/hello.ts!
`,
  ];

  static flags = {
    help: Flags.help({ char: 'h' }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' }),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: 'n', description: 'name to print' }),
  };

  static args = [{ name: 'file' }];

  async run() {
    const { args, flags } = this.parse(Hello);

    const name = flags.name || 'world';
    this.log(`hello ${name} from ./src/commands/hello.ts`);
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
