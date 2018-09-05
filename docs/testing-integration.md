---
id: testing-integration
title: Integration Tests
---

Serverless projects, in general, should lean more towards integration and
end-to-end testing than unit tests.

## Functions

To create an integration test for a Lambda function, simply create a file
with the same name as the function but suffixed with `.integ.ts`.

> @TODO Add `tree` output

### Helpers

Serverlize provides some test helpers to verify expectations for integration
tests.

#### cloudwatch

#### dynamodb

#### s3

Serverlize projects use [Jest][link-jest] for both unit and integration tests.



[link-jest]: https://jestjs.io/
