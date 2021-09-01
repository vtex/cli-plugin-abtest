VTEX Plugin A/B Test
===================

vtex plugin abtest

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
![npm](https://img.shields.io/npm/v/@vtex/cli-plugin-abtest)

* [Usage](#usage)
* [Commands](#commands)

Usage
-----

Host: app.io.vtex.com

Initialize a test or add workspaces to a running test:

`/vtex.ab-tester/v0/{{account}}/master/\_v/private/abtesting/initialize`

Body:

```json
{
  "InitializingWorkspaces": "Workspace1 Workspace2 Workspace3",    // the workspaces that will be tested; no need to include master
  "Proportion": 5000,    // 100 times the percentage of traffic you want the master workspace to receive during the first hours of test
  "Hours": 5,    // the number of hours the test will run with the initially fixed proportion (after that, it starts to update the proportion accordingly to each workspace's performance
  "Type": "conversion"   // you can also select "revenue", in which case the ab-testing system will look at each workspace's revenue (and not conversion) when updating the traffic
}
```

Get the status of a test:

`/vtex.ab-tester/v0/{{account}}/master/\_v/private/abtesting/status`

Remove a specific workspace from a running test:

`/vtex.ab-tester/v0/{{account}}/master/\_v/private/abtesting/finish/{{finishingWorkspace}}`

To finish a test:

`/vtex.ab-tester/v0/{{account}}/master/\_v/private/abtesting/finish`

Important note
------

If you add or remove a workspace to/from a running test, the test is reinitialized, which means that the starting date is updated. (edited)

Commands
--------
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

_See code: [build/commands/workspace/abtest/finish.ts](https://github.com/vtex/cli-plugin-abtest/blob/v0.1.4/build/commands/workspace/abtest/finish.ts)_

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

_See code: [build/commands/workspace/abtest/start.ts](https://github.com/vtex/cli-plugin-abtest/blob/v0.1.4/build/commands/workspace/abtest/start.ts)_

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

_See code: [build/commands/workspace/abtest/status.ts](https://github.com/vtex/cli-plugin-abtest/blob/v0.1.4/build/commands/workspace/abtest/status.ts)_
<!-- commandsstop -->
