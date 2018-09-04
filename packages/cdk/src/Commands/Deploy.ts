import execa from 'execa';

const deploy = async (appPath: string) => {
  // Should wrap around the `cdk` cli command tool
  const options = [
    'deploy',
    // Should also pass the `--app` options pointing to the compiled JS app
    `--app ts-node ${appPath}`,
  ];

  execa('cdk', options).stdout.pipe(process.stdout);
};

export default class Deploy {
  run() {
    deploy('asd');
  }
}
