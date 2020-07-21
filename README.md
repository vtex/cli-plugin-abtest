cli-plugin-template
===================

vtex plugin template

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
![npm](https://img.shields.io/npm/v/@vtex/cli-plugin-template)

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
@vtex/cli-plugin-abtest/0.0.0 linux-x64 node-v12.18.1
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example abtest:finish`](#oclif-example-abtestfinish)
* [`oclif-example abtest:start`](#oclif-example-abteststart)
* [`oclif-example abtest:status`](#oclif-example-abteststatus)

## `oclif-example abtest:finish`

Stop all AB testing in current account

```
USAGE
  $ oclif-example abtest:finish

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  Show debug level logs
  --trace        Ensure all requests to VTEX IO are traced
```

_See code: [build/commands/abtest/finish.ts](https://github.com/vtex/cli-plugin-abtest/blob/v0.0.0/build/commands/abtest/finish.ts)_

## `oclif-example abtest:start`

Start AB testing with current workspace

```
USAGE
  $ oclif-example abtest:start

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  Show debug level logs
  --trace        Ensure all requests to VTEX IO are traced
```

_See code: [build/commands/abtest/start.ts](https://github.com/vtex/cli-plugin-abtest/blob/v0.0.0/build/commands/abtest/start.ts)_

## `oclif-example abtest:status`

Display currently running AB tests results

```
USAGE
  $ oclif-example abtest:status

OPTIONS
  -h, --help     show CLI help
  -v, --verbose  Show debug level logs
  --trace        Ensure all requests to VTEX IO are traced
```

_See code: [build/commands/abtest/status.ts](https://github.com/vtex/cli-plugin-abtest/blob/v0.0.0/build/commands/abtest/status.ts)_
<!-- commandsstop -->
