'use strict'

const path = require('path')

module.exports = async (cli) => {
  try {
    await cli.copy(path.join(__dirname, 'stubs/nexmo.js'), path.join(cli.helpers.configPath(), 'nexmo.js'))
    cli.command.completed('create', 'config/nexmo.js')
  } catch (error) {
    console.log(error)
  }
}
