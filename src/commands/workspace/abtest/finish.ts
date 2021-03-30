import testAbFinish from '../../../modules/abtest/finish'
import CustomCommand from '@oclif/command'
import { ColorifyConstants } from '../../../utils'

export default class ABTestFinish extends CustomCommand {
  static description = `Stops all A/B tests from running on the current ${ColorifyConstants.ID('account')}.`

  async run() {
    this.parse(ABTestFinish)

    await testAbFinish()
  }
}
