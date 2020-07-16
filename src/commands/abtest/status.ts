import testAbStatus from '../../modules/abtest/status'
import { CustomCommand } from 'vtex'

export default class ABTestStatus extends CustomCommand {
  static description = 'Display currently running AB tests results'

  static examples = ['vtex workspace abtest status']

  static flags = {
    ...CustomCommand.globalFlags,
  }

  static args = []

  async run() {
    this.parse(ABTestStatus)
    await testAbStatus()
  }
}
