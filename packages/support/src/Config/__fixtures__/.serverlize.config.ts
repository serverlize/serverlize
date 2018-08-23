export default {
  appName: '' /* Optional, uses name from package.json first */,

  plugins: [] /* Optional, must be the same name as on NPM */,

  deploy: {
    canary: true,
  },

  dynamodb: {
    autoscale: true,
  },

  lambda: {
    http: {
      auth: 'aws.iam',
      middleware: [],
    },
  },
};
