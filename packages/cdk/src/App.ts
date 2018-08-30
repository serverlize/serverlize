import CDK from '@aws-cdk/cdk';

export default class App extends CDK.App {
  constructor(argv: string[]) {
    super(argv);
  }

  loadStack = (name: string, stack: typeof CDK.Stack) => {
    // tslint:disable-next-line:no-unused-expression
    new stack(this, name);
  };
}
