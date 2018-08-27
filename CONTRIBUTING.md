# Contributing

## Documentation

Documentation for this project is available at the
[documentation site][link-docs].

## Guidelines

- **Monorepo:** This repo makes use of [Lerna][link-lerna] and
  [Yarn Workspaces][link-yarn-workspaces] to manage the source for multiple
  packages.

- **Coding Standard:** Linting errors are checked by [TSLint][link-tslint] and
  stylistic issues are handled by [Prettier][link-prettier]. Keeping a
  consistent style throughout the codebase keeps the cognitive load low for all
  contributors and keeps the code style homogeneous.

- **Node 8 LTS:** `serverlize` has a minimum Node version requirement of 8.0.0.
  Pull requests must not require a Node version greater than that unless the
  feature is enabled/backported via [TypeScript][link-typescript].

- **Add tests:** All pull requests should include unit tests to ensure the
  change works as expected and to prevent regressions.

- **Document any change in behaviour:** Make sure any documentation is kept
  up-to-date.

- **Consider our release cycle:** We try to follow [SemVer v2][link-semver].
  Randomly breaking public APIs is not an option.

- **Use Git Flow:** Don't ask us to pull from your `master` branch. Set up
  [Git Flow][link-git-flow] and create a new feature branch from `develop`.

- **One pull request per feature:** If you want to do more than one thing, send
  multiple pull requests.

- **Send coherent history:** Make sure each individual commit in your pull
  request is meaningful. If you had to make multiple intermediate commits while
  developing, please [squash them][link-git-rewrite] before submitting.

- **Useful commit messages:** Commit messages should be short and descriptive,
  and follow [Conventional Changelog Standard][link-conventional-changelog].
  The best way to do this is to use `yarn commit` instead of interacting with
  Git directly.

## Running tests

In order to contribute, you'll need to checkout the source from GitHub and
install dependencies using Yarn:

``` bash
$ git clone https://github.com/serverlize/serverlize.git
$ cd serverlize && yarn
$ yarn test
```

## Reporting a security vulnerability

We want to ensure that `serverlize` is secure for everyone. If you've
discovered a security vulnerability, we appreciate your help in disclosing it
to us in a [responsible manner][link-responsible-disclosure].

Publicly disclosing a vulnerability can put the entire community at risk. If
you've discovered a security concern, please email us at hello@serverlize.net
with [SECURITY] in the subject line. We'll work with you to make sure that we
understand the scope of the issue, and that we fully address your concern. We
consider correspondence sent to this email address our highest priority, and
work to address any issues that arise as quickly as possible.

After a security vulnerability has been corrected, a security hotfix release
will be deployed as soon as possible.

**Happy coding**!

## Contributors

[![][icon-sourcerer-1]][link-sourcerer-1]
[![][icon-sourcerer-2]][link-sourcerer-2]
[![][icon-sourcerer-3]][link-sourcerer-3]
[![][icon-sourcerer-4]][link-sourcerer-4]
[![][icon-sourcerer-5]][link-sourcerer-5]
[![][icon-sourcerer-6]][link-sourcerer-6]
[![][icon-sourcerer-7]][link-sourcerer-7]
[![][icon-sourcerer-8]][link-sourcerer-8]

[link-docs]: http://serverlize.github.io
[link-lerna]: https://lernajs.io/
[link-yarn-workspaces]: https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/
[link-tslint]: https://palantir.github.io/tslint/
[link-prettier]: https://prettier.io/
[link-typescript]: https://www.typescriptlang.org/
[link-semver]: http://semver.org/
[link-git-flow]: http://nvie.com/posts/a-successful-git-branching-model/
[link-git-rewrite]: http://www.git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Changing-Multiple-Commit-Messages
[link-conventional-changelog]: https://github.com/conventional-changelog/conventional-changelog
[link-responsible-disclosure]: http://en.wikipedia.org/wiki/Responsible_disclosure

[icon-sourcerer-1]: https://sourcerer.io/fame/hassankhan/serverlize/serverlize/images/0
[link-sourcerer-1]: https://sourcerer.io/fame/hassankhan/serverlize/serverlize/links/0
[icon-sourcerer-2]: https://sourcerer.io/fame/hassankhan/serverlize/serverlize/images/1
[link-sourcerer-2]: https://sourcerer.io/fame/hassankhan/serverlize/serverlize/links/1
[icon-sourcerer-3]: https://sourcerer.io/fame/hassankhan/serverlize/serverlize/images/2
[link-sourcerer-3]: https://sourcerer.io/fame/hassankhan/serverlize/serverlize/links/2
[icon-sourcerer-4]: https://sourcerer.io/fame/hassankhan/serverlize/serverlize/images/3
[link-sourcerer-4]: https://sourcerer.io/fame/hassankhan/serverlize/serverlize/links/3
[icon-sourcerer-5]: https://sourcerer.io/fame/hassankhan/serverlize/serverlize/images/4
[link-sourcerer-5]: https://sourcerer.io/fame/hassankhan/serverlize/serverlize/links/4
[icon-sourcerer-6]: https://sourcerer.io/fame/hassankhan/serverlize/serverlize/images/5
[link-sourcerer-6]: https://sourcerer.io/fame/hassankhan/serverlize/serverlize/links/5
[icon-sourcerer-7]: https://sourcerer.io/fame/hassankhan/serverlize/serverlize/images/6
[link-sourcerer-7]: https://sourcerer.io/fame/hassankhan/serverlize/serverlize/links/6
[icon-sourcerer-8]: https://sourcerer.io/fame/hassankhan/serverlize/serverlize/images/7
[link-sourcerer-8]: https://sourcerer.io/fame/hassankhan/serverlize/serverlize/links/7
