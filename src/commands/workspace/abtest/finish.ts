import testAbFinish from '../../../modules/abtest/finish'
import { CustomCommand } from 'vtex'
import { ColorifyConstants } from './colors'

export default class ABTestFinish extends CustomCommand {
  static description = `Stops all A/B tests from running on the current ${ColorifyConstants.ID('account')}.`

  static flags = {
    ...CustomCommand.globalFlags,
  }

  async run() {
    this.parse(ABTestFinish)

    await testAbFinish()
  }
}
