---
id: cli-functions
title: Events
---

```bash
$ slz function create <name> --type <event> --path /hello --auth aws.iam
```

where `event` is one of:

- `http`
- `stream`
- `s3`
- `schedule`
- `sns`
- `sqs`

- `alexaSkill`
- `iot`
- `cloudwatchEvent`
- `cloudwatchLog`
- `cognitoUserPool`
- `alexaSmartHome`
