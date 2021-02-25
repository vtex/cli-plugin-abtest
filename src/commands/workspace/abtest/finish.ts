import testAbFinish from '../../../modules/abtest/finish'
import { CustomCommand, ColorifyConstants } from 'vtex'

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
