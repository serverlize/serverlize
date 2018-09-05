---
id: getting-started-configuration
title: Configuration
---

Serverlize uses [`cosmiconfig`][link-cosmiconfig] to load its' configuration
file. This means the configuration file can be in a variety of formats,
whichever suits the team best. However, we highly recommend leaving it as
a TypeScript file, this allows type-hinting on the configuration which can
prevent unintended runtime behaviour.

```typescript
import { Lambda } from '@serverlize/framework';

export default {
  appName: '', /* Optional, uses name from package.json first */

  plugins: [], /* Optional, must be the same name as on NPM */

  deploy: {
    type: Lambda.Deploy.Canary.10Percent5Minutes,
  },

  apigateway: {

  },

  dynamoDB: {
    autoScale: {
      enabled: true,
      threshold: {
        minimum: 5,
        maximum: 500,
        usage: 0.75,
      },
    },
  },

  lambda: {
    http: {
      auth: 'aws.iam',
      middleware: [],
    },
  },
};

```

## `appName`

**Default:** `''`

This is the name of the application. By default, Serverlize tries to use the
`name` from `package.json`.

## `plugins`

**Default:** `[]`

A list of optional plugins can be specified.

## `deploy`

### `deploy.type`

**Default:** `Lambda.Deploy.AllAtOnce`

By default, Serverlize will deploy your functions all at once. This behaviour
can be configured by changing the type property:

```typescript
import { Lambda } from '@serverlize/framework';

export default {
  deploy: {
    type: Lambda.Deploy.Canary.10Percent5Minutes,
  },
}
```

Serverless supports all the same predefined deployment configurations
as [CodeDeploy][link-codedeploy-configurations]:

- `Lambda.Deploy.Canary.10Percent5Minutes`
- `Lambda.Deploy.Canary.10Percent10Minutes`
- `Lambda.Deploy.Canary.10Percent15Minutes`
- `Lambda.Deploy.Canary.10Percent30Minutes`
- `Lambda.Deploy.Linear.10PercentEvery1Minute`
- `Lambda.Deploy.Linear.10PercentEvery2Minutes`
- `Lambda.Deploy.Linear.10PercentEvery3Minutes`
- `Lambda.Deploy.Linear.10PercentEvery10Minutes`
- `Lambda.Deploy.AllAtOnce`

[link-codedeploy-configurations]: https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html#deployment-configuration-lambda

## `dynamodb`

### `dynamodb.autoscale`

#### `dynamodb.autoscale.enabled`

**Default:** `true`

When set to `true`, enables autoscaling for all DynamoDB resources in the
project.

#### `dynamodb.autoscale.threshold`

**Default:** `true`

## `lambda`

[link-cosmiconfig]: https://github.com/davidtheclark/cosmiconfig
[link-canary-deployments]: https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html#deployment-configuration-lambda
