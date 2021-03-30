cli-plugin-abtest
===================

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
$ vtex COMMAND
running command...
$ vtex (-v|--version|version)
@vtex/cli-plugin-abtest/0.1.16-beta linux-x64 node-v12.21.0
$ vtex --help [COMMAND]
USAGE
  $ vtex COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`vtex workspace:abtest:finish`](#vtex-workspaceabtestfinish)
* [`vtex workspace:abtest:start`](#vtex-workspaceabteststart)
* [`vtex workspace:abtest:status`](#vtex-workspaceabteststatus)

## `vtex workspace:abtest:finish`

Stops all A/B tests from running on the current account.

```
USAGE
  $ vtex workspace:abtest:finish

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  Show debug level logs
  --trace        Ensure all requests to VTEX IO are traced
```

_See code: [build/commands/workspace/abtest/finish.ts](https://github.com/vtex/cli-plugin-abtest/blob/v0.1.16-beta/build/commands/workspace/abtest/finish.ts)_

## `vtex workspace:abtest:start`

Starts a new A/B test on the current workspace.

```
USAGE
  $ vtex workspace:abtest:start

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  Show debug level logs
  --trace        Ensure all requests to VTEX IO are traced
```

_See code: [build/commands/workspace/abtest/start.ts](https://github.com/vtex/cli-plugin-abtest/blob/v0.1.16-beta/build/commands/workspace/abtest/start.ts)_

## `vtex workspace:abtest:status`

Displays the results of the active A/B tests.

```
USAGE
  $ vtex workspace:abtest:status

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  Show debug level logs
  --trace        Ensure all requests to VTEX IO are traced
```

_See code: [build/commands/workspace/abtest/status.ts](https://github.com/vtex/cli-plugin-abtest/blob/v0.1.16-beta/build/commands/workspace/abtest/status.ts)_
<!-- commandsstop -->
