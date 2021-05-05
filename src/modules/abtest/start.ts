import chalk from 'chalk'

import { logger, promptConfirm } from 'vtex'

import {
  abtester,
  checkABTester,
  promptConstraintDuration,
  promptProductionWorkspace,
  promptProportionTrafic,
} from './utils'

const promptContinue = (workspace: string, significanceLevel?: string) => {
  return significanceLevel
    ? promptConfirm(
        `You are about to start an A/B test between workspaces \
${chalk.green('master')} and ${chalk.green(workspace)} with \
${chalk.red(significanceLevel)} significance level. Proceed?`,
        false
      )
    : promptConfirm(
        `You are about to start an A/B test between workspaces \
${chalk.green('master')} and ${chalk.green(workspace)}. Proceed?`,
        false
      )
}

export default async () => {
  await checkABTester()
  const workspace = await promptProductionWorkspace('Choose production workspace to start A/B test:')

  logger.info(`Setting workspace ${chalk.green(workspace)} to A/B test`)
  const promptAnswer = await promptContinue(workspace)

  if (!promptAnswer) return
  const proportion = Number(await promptProportionTrafic())
  const timeLength = Number(await promptConstraintDuration())

  try {
    await abtester.customStart(workspace, timeLength, proportion)
  } catch (err) {
    if (err.message === 'Workspace not found') {
      console.log(`Test not initialized due to workspace ${workspace} not found by ab-tester.`)
    }
  }

  logger.info(`Workspace ${chalk.green(String(workspace))} in A/B test`)
  logger.info(`You can stop the test using ${chalk.blue('vtex workspace abtest finish')}`)
}
