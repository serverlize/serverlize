# serverlize

[![Serverless][icon-serverless]][link-serverless]
[![Semantic Release][icon-semantic-release]][link-semantic-release]
[![NPM Version][icon-npm]][link-npm]
[![Build Status][icon-ci]][link-ci]
[![Greenkeeper Status][icon-greenkeeper]][link-greenkeeper]

Features:
- Has a CLI utility to speed up development cycles
- Handy middleware for Lambda functions
- DynamoDB Data Modelling

Under-the-hood:
- [CloudForm][link-cloudform] - for CFN stack generation
- [GraphQL][link-graphql] - for creating graph queries
- [Middy][link-middy] - for Lambda middleware

`@serverlize/serverless`:
- `sls slz init` (only required in projects not using `serverlize-starter`)
- `sls slz model create --init` 
- `sls slz model create <name> --hashKey <hashKey> [--rangeKey <rangeKey>] --autoscaling 5,5`
- `sls slz event create <name> --type http|dynamodb|sns --path /hello --arn * --cors true`

`@serverlize/db`:
- Provides `Model` and `Schema` classes
- Supports generating CloudFormation templates for DynamoDB tables
- (GraphQL) Allows generating `Type`/`InputType` from a `Schema`

`@serverlize/framework`:
- Wraps CloudForm for template generation

`@serverlize/lambda`:
- Wraps Middy for Lambda middleware

`@serverless/framework`:
- Wraps `@serverless/core`, `@serverless/db` and `@serverless/lambda`

[link-cloudform]: https://github.com/bright/cloudform
[link-dynamoose]: https://github.com/dynamoosejs/dynamoose
[link-graphql]: https://github.com/facebook/graphql
[link-middy]: https://github.com/middyjs/middy

[icon-serverless]: http://public.serverless.com/badges/v3.svg
[link-serverless]: http://www.serverless.com
[icon-semantic-release]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[link-semantic-release]: https://semantic-release.gitbooks.io/semantic-release/
[icon-npm]: https://img.shields.io/npm/v/@serverlize/framework.svg
[link-npm]: https://google.com
[icon-ci]: https://img.shields.io/travis/serverlize/serverlize.svg
[link-ci]: https://google.com
[icon-greenkeeper]: https://badges.greenkeeper.io/serverlize/serverlize.svg
[link-greenkeeper]: https://google.com
