import testAbFinish from '../../modules/abtest/finish'
import { CustomCommand } from 'vtex'

export default class ABTestFinish extends CustomCommand {
  static description = 'Stop all AB testing in current account'

  static flags = {
    ...CustomCommand.globalFlags,
  }

  async run() {
    this.parse(ABTestFinish)

    await testAbFinish()
  }
}
