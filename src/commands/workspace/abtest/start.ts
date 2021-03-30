import testAbStart from '../../../modules/abtest/start'
import { CustomCommand } from 'vtex'
import { ColorifyConstants } from './colors'

export default class ABTestStart extends CustomCommand {
  static description = `Starts a new A/B test on the current ${ColorifyConstants.ID('workspace')}.`

  static flags = {
    ...CustomCommand.globalFlags,
  }

  async run() {
    this.parse(ABTestStart)

    await testAbStart()
  }
}
