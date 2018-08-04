# serverlize

[![MIT Licensed][icon-license]][link-license]
[![NPM Version][icon-npm]][link-npm]
[![Build Status][icon-ci]][link-ci]
[![Greenkeeper Status][icon-greenkeeper]][link-greenkeeper]

[![Code Issues][icon-issues]][link-issues]
[![Codebase Maintainability][icon-maintainability]][link-maintainability]
[![Test Coverage][icon-coverage]][link-coverage]
[![Gitter][icon-gitter]][link-gitter]

[![Serverless][icon-serverless]][link-serverless]
[![Commitizen friendly][icon-commitizen]][link-commitizen]
[![Semantic Release][icon-semantic-release]][link-semantic-release]
[![Code Style: Prettier][icon-code-style]][link-code-style]

## Features:

- Has a CLI utility to speed up development cycles
- Handy middleware for Lambda functions
- DynamoDB Data Modelling

## Under-the-hood:

- [CloudForm][link-cloudform] - for CFN stack generation
- [GraphQL][link-graphql] - for creating graph queries
- [Middy][link-middy] - for Lambda middleware

`@serverlize/cli`:

- Provides commands to quickly generate handlers and models

`@serverlize/db`:

- Provides `Model` and `Schema` classes
- Supports generating CloudFormation templates for DynamoDB tables
- (GraphQL) Allows generating `Type`/`InputType` from a `Schema`

`@serverlize/framework`:

- Wraps CloudForm for template generation

`@serverlize/lambda`:

- Wraps Middy for Lambda middleware

`@serverless/framework`:

- Wraps `@serverless/db` and `@serverless/lambda`

[link-cloudform]: https://github.com/bright/cloudform
[link-dynamoose]: https://github.com/dynamoosejs/dynamoose
[link-graphql]: https://github.com/facebook/graphql
[link-middy]: https://github.com/middyjs/middy

[icon-license]: https://img.shields.io/github/license/serverlize/serverlize.svg?style=flat-square
[link-license]: LICENSE
[icon-npm]: https://img.shields.io/npm/v/@serverlize/framework.svg?style=flat-square
[link-npm]: https://google.com
[icon-ci]: https://img.shields.io/travis/serverlize/serverlize.svg?style=flat-square
[link-ci]: https://travis-ci.org/serverlize/serverlize
[icon-greenkeeper]: https://badges.greenkeeper.io/serverlize/serverlize.svg?style=flat-square
[link-greenkeeper]: https://greenkeeper.io/

[icon-issues]: https://img.shields.io/codeclimate/issues/serverlize/serverlize.svg?style=flat-square
[link-issues]: https://codeclimate.com/github/serverlize/serverlize/issues
[icon-maintainability]: https://img.shields.io/codeclimate/maintainability/serverlize/serverlize.svg?style=flat-square
[link-maintainability]: https://codeclimate.com/github/serverlize/serverlize
[icon-coverage]: https://img.shields.io/codeclimate/coverage-letter/serverlize/serverlize.svg?style=flat-square
[link-coverage]: https://codeclimate.com/github/serverlize/serverlize
[icon-gitter]: https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg?style=flat-square
[link-gitter]: https://gitter.im/serverlize/lobby

[icon-serverless]: http://public.serverless.com/badges/v2.svg
[link-serverless]: http://www.serverless.com
[icon-commitizen]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[link-commitizen]: http://commitizen.github.io/cz-cli/
[icon-semantic-release]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[link-semantic-release]: https://semantic-release.gitbooks.io/semantic-release/
[icon-code-style]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[link-code-style]: https://github.com/prettier/prettier
