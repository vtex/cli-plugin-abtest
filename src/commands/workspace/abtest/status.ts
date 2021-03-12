import testAbStatus from '../../../modules/abtest/status'
import { CustomCommand } from 'vtex'

export default class ABTestStatus extends CustomCommand {
  static description = `Displays the results of the active A/B tests.`

  static flags = {
    ...CustomCommand.globalFlags,
  }

  async run() {
    this.parse(ABTestStatus)
    await testAbStatus()
  }
}
