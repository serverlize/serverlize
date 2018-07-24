---
id: cli-models
title: CLI Models
sidebar_label: Models
---

The CLI tool helps you get the mundane jobs done quickly.

- `slz init` (only required in projects not using `serverlize-starter`)


`slz event create <name> --type <event> --path /hello --arn * --cors true`
where <event> is one of `http|stream|s3|schedule|sns|sqs|alexaSkill|iot|cloudwatchEvent|cloudwatchLog|cognitoUserPool|alexaSmartHome`



- `slz model create --init`
- `slz model create <name> --hashKey <hashKey> [--rangeKey <rangeKey>] --autoscaling 5,5`
