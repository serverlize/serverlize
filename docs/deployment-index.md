---
id: deployment-index
title: Deployment
---

From the project root, type the following command into your terminal:

```bash
$ slz deploy
```

## Deploy Process

Serverlize provides a best practice workflow for deploying applications to the
cloud.

> @TODO Add some sort of diagram here

`slz deploy` will generate the CFN template and upload to the deployment
bucket, after which a CodePipeline resource is triggered.

- Source: Retrieve code from Git upon push
- Build: Run `slz package` on project and upload artifacts to S3
- Staging: Code is deployed to `dev` stage using CodeDeploy/CFN and tests are run
- (Optional) Manual approval
- Production: Code is released to `prod` stage using CodeDeploy/CFN

## Canary Deployments

By default, new deployments are deployed canary-style

> @TODO Link canary deployments here

This allows for a more controlled deployment, where you can rollback a
breaking build to the last known good state.

To disable canary deployments, set `deploy.canary` to `false` in
`serverlize.config.ts`.
