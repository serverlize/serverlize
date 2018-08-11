---
id: lambda-logging
title: Logging
---

Serverlize comes with a logging solution out-of-the-box.

```typescript
import { Logger } from '@serverlize/framework';

const log = new Logger({
  name: 'MyLogger',
  timestamps: true,
  format: 'json',
});

log.info('This is an informational message');
log.error(new Error('This is an error message'));
log.debug({ foo: "bar" });
```

## Configuration

### Format

Logs can be formatted as `json` or `text`.

#### Custom Formatting

If the provided formats are insufficient, a custom formatter function can be
used instead:

```typescript
import { Logger } from '@serverlize/framework';

const log = new Logger({
  name: 'MyLogger',
  format: (messages: any[]) => {
    return { messages };
  },
});
```

### Transports

By default, logs are output to the console. Additional transports can be
configured.

All available transports are under `Logger.Transports`.

#### Console

The `Console` transport is the default.

```typescript
import { Logger } from '@serverlize/framework';

const log = new Logger({
  name: 'MyLogger',
  transports: [
    new Logger.Transports.Console(),
  ],
});
```

#### File

This transport allows writing logs to a file in the `/tmp` folder. Log files
are named `logs-<requestId>.txt` and are multiline JSON files.

```typescript
import { Logger } from '@serverlize/framework';

const log = new Logger({
  name: 'MyLogger',
  transports: [
    new Logger.Transports.File(),
  ],
});
```

This logger can be used in conjunction with the `upload-tmp-logs-to-s3`
middleware to automatically upload log files to an S3 bucket before the request
completes.

#### S3

```typescript
import { Logger } from '@serverlize/framework';

const log = new Logger({
  name: 'MyLogger',
  transports: [
    new Logger.Transports.S3({ bucket: 'my-logs-bucket' }),
  ],
});
```

#### Custom

Custom transports can be created by subclassing
`Logger.Transports.AbstractTransport`.
