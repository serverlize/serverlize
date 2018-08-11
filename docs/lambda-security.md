---
id: lambda-security
title: Security
---

Security is a core aspect of Serverlize applications, and there are multiple
aspects to consider.

## Credentials

Serverlize integrates [AWS KMS][link-aws-kms] into as many services that
support it, providing developers with a hassle-free way of securing Lambdas.

By default, any values in `.env` are automatically secured with KMS. These
values are automatically unwrapped by default using the [`ssm`][link-middy-ssm]
middleware, this can be configured by overriding the `middleware` parameter in
the function handler class.

## Authentication

Functions can be individually or globally configured for authentication. Each
function can have an `auth` property.

To globally configure authentication, set `lambda.http.auth` in
[`.serverlize.config.ts`][link-configuration] to the desired value.

### API Keys

Set the `auth` property to `aws.apiKey`. Requests must include the key as the
[`x-api-key`][link-api-key] header.

### AWS IAM

Set the `auth` property to `aws.iam`. Requests must be signed using the
[AWS Signature v4][link-aws-sig-v4] process.

### AWS Cognito User Pools

Set the `auth` property to `aws.cognitoUserPools`. Requests must include the
[`idToken`][link-cognito] as the `Authorization` header.

### Custom Authentication

To create a Lambda for implementing custom logic, run the following:

```bash
$ slz function create Authorizer --type auth:custom
```

This will create a function under `functions/Authorizer/index.ts` with a
default exported property called `handler()`. This function should return
a valid IAM Policy that either allows or denies access based on input
received from the `event` object.

## Authorization

> @TODO This might be better left to a future version

[link-aws-kms]: http://google.com
[link-middy-ssm]: https://github.com/middyjs/middy/tree/1.0.0-alpha/packages/ssm
[link-configuration]: ./getting-started-configuration
[link-api-key]: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-usage-plans-with-rest-api.html#api-gateway-usage-plan-test-with-postman
[link-aws-sig-v4]: https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html
[link-cognito]: https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-enable-cognito-user-pool.html
