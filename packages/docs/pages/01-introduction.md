# Introduction

Serverlize is just a fancy wrapper around Serverless, so if you're familiar with it this should be a cakewalk.

The easiest way to get started is to clone `serverlize-starter` as follows:

```bash
$ yarn global add @serverlize/cli
$ git clone EndemolShineGroup/serverlize-starter
$ cd serverlize-starter
$ yarn
```

<< MAYBE MAKE A `create-serverlize-app` >>

Once inside the project, you should see a bunch of folders.

```bash
$ slz event create hello --path /
```

You should now see a new folder under `functions/` called `hello`. Inside are two files, `handler.ts` and `function.yml`.

Now run `yarn deploy:dev`.
