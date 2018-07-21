export interface Options extends Serverless.Options {
  [key: string]: any;

  name: string;
  hashKey: string;
  rangeKey?: string;
}

export default {
  name: 'create-model',
  command: {
    lifeCycleEvents: ['model'],
    options: {
      name: {
        usage: 'Name of the model',
        shortcut: 'n',
        required: true,
      },
      hashKey: {
        usage: `The hash (or partition) key of the model's backing DynamoDB resource`,
        shortcut: 'h',
        required: true,
      },
      rangeKey: {
        usage: `The range (or sort) key of the model's backing DynamoDB resource`,
        shortcut: 'h',
      },
    },
  },
  hook: (plugin: Serverless.Plugin<Options>) => {
    return () => {
      const { name, hashKey, rangeKey } = plugin.options;

      // const modelOptions = { name, hashKey };
      //
      // if (rangeKey) {
      //   modelOptions.rangeKey = rangeKey;
      // }

      return Promise.resolve({ foo: 'bar' });
    };
  },
} as Serverless.PluginExtension<Options>;
