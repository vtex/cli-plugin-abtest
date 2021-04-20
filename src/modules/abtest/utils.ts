import { AppManifest } from '@vtex/api'
import chalk from 'chalk'
import enquirer from 'enquirer'
import { compose, filter, map, prop } from 'ramda'
import * as env from 'vtex'
import { createFlowIssueError, createAppsClient, createWorkspacesClient, SessionManager, COLORS } from 'vtex'
import { ABTester } from '../../clients/apps/ABTester'
import semver from 'semver'

const VERSION_THRESHOLD = '0.12.0'

const DEFAULT_TIMEOUT = 15000

const { account } = SessionManager.getSingleton()

const options = { timeout: (env.envTimeout || DEFAULT_TIMEOUT) as number }

// Clients for the 'master' workspace
export const abtester = ABTester.createClient({ workspace: 'master' }, { ...options, retries: 3 })
export const apps = createAppsClient({ workspace: 'master' })

export const formatDuration = (durationInMinutes: number) => {
  const minutes = durationInMinutes % 60
  const hours = Math.trunc(durationInMinutes / 60) % 24
  const days = Math.trunc(durationInMinutes / (60 * 24))

  return `${days} days, ${hours} hours and ${minutes} minutes`
}

const installedABTester = async (): Promise<AppManifest> => {
  try {
    return await apps.getApp('vtex.ab-tester@x')
  } catch (e) {
    if (e.response.data.code === 'app_not_found') {
      throw createFlowIssueError(`The app ${chalk.yellow('vtex.ab-tester')} is \
not installed in account ${chalk.green(account)}, workspace \
${chalk.blue('master')}. Please install it before attempting to use A/B \
testing functionality`)
    }
    throw e
  }
}

const checkABTesterVersion = (version: string) => {
  const [versionNumber] = version.split('-')

  if (!semver.satisfies(versionNumber, `>${VERSION_THRESHOLD}`)) {
    throw createFlowIssueError(`You are using ${chalk.yellow(`vtex.ab-tester@${version}`)}, \
which is of an excessively old version. Please, use a version newer than ${chalk.green(VERSION_THRESHOLD)} \
\nTo get the latest version, run ${chalk.hex(COLORS.PINK)('vtex install vtex.ab-tester')}`)
  }
}

export const checkABTester = async () => {
  const abTesterManifest = await installedABTester()
  checkABTesterVersion(abTesterManifest.version)
}

export const promptProductionWorkspace = async (promptMessage: string): Promise<string> => {
  const workspaces = createWorkspacesClient()
  const productionWorkspaces = await workspaces.list(account).then(
    compose<any, any, any>(
      map(({ name }) => name),
      filter(({ name, production }) => production === true && name !== 'master')
    )
  )

  return enquirer
    .prompt<{ workspace: string }>({
      name: 'workspace',
      message: promptMessage,
      type: 'select',
      choices: productionWorkspaces,
    })
    .then(prop('workspace'))
}

export const promptConstraintDuration = async (): Promise<string> => {
  const message = 'The amount of time should be an integer.'

  return prop(
    'time',
    await enquirer.prompt<{ time: string }>({
      name: 'time',
      message: "What's the amount of time respecting the restriction?",
      validate: (s) => /^[0-9]+$/.test(s) || message,
      // @ts-ignore
      filter: (s) => s.trim(),
      type: 'input',
    })
  )
}

export const promptProportionTrafic = async (): Promise<string> => {
  const message = 'The proportion of traffic directed to a workspace should be an integer between 0 and 10000.'

  return prop(
    'proportion',
    await enquirer.prompt<{ proportion: string }>({
      name: 'proportion',
      message: `What's the proportion of traffic initially directed to workspace ${chalk.blue('master')}?
      This should be an integer between 0 and 10000 that corresponds each 1% to 100, i.e. if you want to direct 54.32% of traffic to master, this value should be 5432.
      If you don't want to fix this value, just type any value here and set the next restriction to 0.`,
      validate: (s) => /^([0-9]{1,4}|10000)$/.test(s) || message,
      // @ts-ignore
      filter: (s) => s.trim(),
      type: 'input',
    })
  )
}
