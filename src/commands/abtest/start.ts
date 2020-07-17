import testAbStart from '../../modules/abtest/start'
import { CustomCommand } from 'vtex'

export default class ABTestStart extends CustomCommand {
  static description = 'Start AB testing with current workspace'

  static flags = {
    ...CustomCommand.globalFlags,
  }

  async run() {
    this.parse(ABTestStart)

    await testAbStart()
  }
}
