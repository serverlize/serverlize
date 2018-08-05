---
id: cli-events
title: Events
sidebar_label: Events
---

```bash
$ slz event create <name> --type <event> --path /hello --arn * --cors true
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
