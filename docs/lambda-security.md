---
id: lambda-security
title: Security
---

Security is a core aspect of Serverlize applications, and there are multiple
aspects to consider

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

To globally configure authentication, set `lambda.http.auth` to the required
value.

### API Keys

Set the `auth` property to `apiKey`.

### AWS IAM

Set the `auth` property to `aws.iam`.

### AWS Cognito User Pools

Set the `auth` property to `aws.cognito`.

### Custom Authentication

To create a Lambda for implementing custom logic, run the following:

```bash
$ slz function create Authorizer --type auth:custom
```

This will create a function under `functions/Authorizer/index.ts` with a
`handler()` method. This method should return a valid IAM Policy that either
allows or denies access based on input received from the `event` object.

## Authorization

> @TODO This might be better left to a future version

[link-aws-kms]: http://google.com
