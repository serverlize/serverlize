---
id: cli-custom
title: Custom
---

## Introduction

Serverlize comes with a handy CLI bundled with a number of helpful commands to
assist you whilst developing your application. To view a list of all available
commands, type the following into a console:

```bash
$ slz
```

## Writing Commands

In addition to the commands provided by default by Serverlize, custom commands
can also be created. To create a command, type the following into a terminal:

```bash
$ slz create command MyCommand
```

This will create a class called `MyCommand` under `app/Commands`, however, this
can be changed by editing `paths.commands` in `.serverlize.config.ts`.

## Executing Commands

### CLI

```bash
$ slz
```

### API

```typescript
import { Commands } from '@serverless/framework';

const handler = async (event, context) => {
  const cmd = Command.get('MyCommand');
  const result = await cmd.execute();

  return Promise.resolve({
    statusCode: 200,
    body: result,
  });
};

```
