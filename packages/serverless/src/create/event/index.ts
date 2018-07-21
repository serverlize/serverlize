export interface Options extends Serverless.Options {
  [key: string]: any;

  name: string;
  eventSource: string;
}

export default {
  name: 'create-event',
  command: {
    lifeCycleEvents: ['event'],
    options: {
      name: {
        usage: 'Name of the event',
        shortcut: 'n',
        required: true,
      },
      eventSource: {
        usage: 'Event source to trigger the Lambda from',
        shortcut: 's',
        required: true,
      },
    },
  },
  hook: (plugin: Serverless.Plugin<Options>) => {
    return () => {
      const { name, eventSource } = plugin.options;

      // const modelOptions = { name, hashKey };
      //
      // if (rangeKey) {
      //   modelOptions.rangeKey = rangeKey;
      // }

      return Promise.resolve({ foo: 'bar' });
    };
  },
} as Serverless.PluginExtension<Options>;
