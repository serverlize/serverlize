declare namespace Serverless {
  interface Options {
    stage: string | null;
    region: string | null;
    noDeploy?: boolean;
  }

  namespace Provider {
    class Aws {
      constructor(serverless: Serverless, options: Serverless.Options);

      getProviderName: () => string;
      getRegion: () => string;
      getServerlessDeploymentBucketName: () => string;
      getStage: () => string;

      request: (
        service: string,
        method: string,
        data: {},
        stage: string,
        region: string
      ) => Promise<any>;
    }
  }

  namespace Service {
    interface Custom {}
  }

  interface CliCommand {
    lifeCycleEvents: string[];
    options?: {
      [key: string]: {
        default?: any;
        required?: boolean;
        shortcut: string;
        usage: string;
      };
    };
    usage?: string;
  }

  type Hook = () => Promise<any>;

  abstract class Plugin<T extends Serverless.Options> {
    protected constructor(serverless: Serverless, options: T);

    serverless: Serverless;
    options: T;

    commands: {
      [key: string]: CliCommand;
    };
    hooks: {
      [key: string]: Hook;
    };
  }

  interface PluginExtension<T extends Serverless.Options> {
    name: string;
    command: CliCommand;
    hook: (plugin: Serverless.Plugin<T>) => () => Promise<any>;
  }

  interface Config {
    servicePath: string;
  }

  class YamlParser {
    constructor(serverless: Serverless);
    parse(yamlFilePath: string): Promise<any>;
  }

  class PluginManager {
    constructor(serverless: Serverless);

    setCliOptions(options: Options): void;
    setCliCommands(commands: {}): void;

    addPlugin(Plugin: Plugin<any>): void;
    loadAllPlugins(servicePlugins: {}): void;
    loadPlugins(plugins: {}): void;
    loadCorePlugins(): void;
    loadServicePlugins(servicePlugs: {}): void;
    loadCommand(pluginName: string, details: {}, key: string): {};
    loadCommands(pluginInstance: Plugin<any>): void;

    cliOptions: {};
    cliCommands: {};
    serverless: Serverless;
    plugins: any[];
    commands: {};
    hooks: {};
    deprecatedEvents: {};
  }

  interface Utils {}

  interface Variables {}

  interface ServerlessError {}

  namespace Service {
    interface Custom {}
  }

  interface Function {
    name: string;
  }

  interface Event {
    eventName: string;
  }

  class Service {
    constructor(serverless: Serverless, data: {});

    load(rawOptions: {}): Promise<any>;
    setFunctionNames(rawOptions: {}): void;

    getServiceName(): string;
    getAllFunctions(): string[];
    getAllFunctionsNames(): string[];
    getFunction(functionName: string): Serverless.Function;
    getEventInFunction(
      eventName: string,
      functionName: string
    ): Serverless.Event;
    getAllEventsInFunction(functionName: string): Serverless.Event[];

    mergeResourceArrays(): void;
    validate(): Serverless.Service;

    update(data: {}): {};

    custom: Serverless.Service.Custom;

    provider: {
      compiledCloudFormationTemplate: {
        Resources: any[];
      };

      name: string;
    };
  }
}

declare class Serverless {
  constructor(config: {});

  init(): Promise<any>;
  run(): Promise<any>;

  setProvider(name: string, provider: Serverless.Provider.Aws): null;
  getProvider(name: string): Serverless.Provider.Aws;

  getVersion(): string;

  cli: {
    log(message: string): null;
  };

  providers: {};
  yamlParser: Serverless.YamlParser;
  utils: Serverless.Utils;
  variables: Serverless.Variables;
  pluginManager: Serverless.PluginManager;

  config: Serverless.Config;
  serverlessDirPath: string;

  service: Serverless.Service;
  version: string;
}

export default Serverless;
