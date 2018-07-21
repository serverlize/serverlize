import Serverless from './types/serverless';

// https://gist.github.com/HyperBrain/50d38027a8f57778d5b0f135d80ea406

export default class ServerlizePlugin extends Serverless.Plugin<Options> {
  /**
   * A list of all loaded extensions for the plugin
   */
  private static readonly extensions: Serverless.PluginExtension[];

  /**
   * Constructor
   */
  constructor(serverless: Serverless, options: Options) {
    super(serverless, options);
    this.serverless = serverless;
    this.options = options;

    this.commands = {};
    this.hooks = {
      'before:package:compileEvents': this.compileEvents,
    };
  }

  private loadExtensions = () => {
    ServerlizePlugin.extensions.forEach((extension) => {
      this.commands[extension.name] = extension.command;
      this.hooks[extension.name] = extension.hook(this);
    });
  };

  private compileEvents = () => {
    // Read all `function.yml` files from `${APP_PATH}/functions/**/*.yml`
    return Promise.resolve({ foo: 'bar' });
  };

  private compileResources = () => {
    // Check if any models exist under `${APP_PATH}/app/models/`
    // Check if any topics exist under `${APP_PATH}/app/topics/`
    return Promise.resolve({ foo: 'bar' });
  };

  /**
   * Process the provided configuration
   */
  private parseOptions = () => {
    return Promise.resolve({ foo: 'bar' });
  };
}
