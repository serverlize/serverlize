import Serverless from 'serverless-types';

export default class ServerlizePlugin {
  public hooks: {
    [key: string]: () => Promise<any>;
  };

  serverless: Serverless;

  /**
   * Constructor
   */
  constructor(serverless: Serverless) {
    this.serverless = serverless;
    this.hooks = {
      'package:compileEvents': this.process,
    };
  }

  /**
   * Process the provided configuration
   */
  private process = () => {
    return Promise.resolve({ foo: 'bar' });
  };
}
