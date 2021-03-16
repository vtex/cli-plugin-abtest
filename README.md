cli-plugin-abtest

vtex plugin abtest

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
![npm](https://img.shields.io/npm/v/@vtex/cli-plugin-abtest)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @vtex/cli-plugin-abtest
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
@vtex/cli-plugin-abtest/0.1.3-beta linux-x64 node-v12.21.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`oclif-example workspace:abtest:finish`](#oclif-example-workspaceabtestfinish)
* [`oclif-example workspace:abtest:start`](#oclif-example-workspaceabteststart)
* [`oclif-example workspace:abtest:status`](#oclif-example-workspaceabteststatus)

## `oclif-example workspace:abtest:finish`

Stops all A/B tests from running on the current account.

```
USAGE
  $ oclif-example workspace:abtest:finish

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  Show debug level logs
  --trace        Ensure all requests to VTEX IO are traced
```

_See code: [build/commands/workspace/abtest/finish.ts](https://github.com/vtex/cli-plugin-abtest/blob/v0.1.3-beta/build/commands/workspace/abtest/finish.ts)_

## `oclif-example workspace:abtest:start`

Starts a new A/B test on the current workspace.

```
USAGE
  $ oclif-example workspace:abtest:start

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  Show debug level logs
  --trace        Ensure all requests to VTEX IO are traced
```

_See code: [build/commands/workspace/abtest/start.ts](https://github.com/vtex/cli-plugin-abtest/blob/v0.1.3-beta/build/commands/workspace/abtest/start.ts)_

## `oclif-example workspace:abtest:status`

Displays the results of the active A/B tests.

```
USAGE
  $ oclif-example workspace:abtest:status

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  Show debug level logs
  --trace        Ensure all requests to VTEX IO are traced
```

_See code: [build/commands/workspace/abtest/status.ts](https://github.com/vtex/cli-plugin-abtest/blob/v0.1.3-beta/build/commands/workspace/abtest/status.ts)_
<!-- commandsstop -->
