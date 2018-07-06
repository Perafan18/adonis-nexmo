'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const Nexmo = require('nexmo')

class NexmoProvider extends ServiceProvider {
  register () {
    const Config = this.app.use('Adonis/Src/Config')
    this.app.singleton('Perafan/Nexmo', () => {
      const config = {
        apiKey: Config.get('nexmo.apiKey'),
        apiSecret: Config.get('nexmo.apiSecret')
      }
      const options = Config.get('nexmo.options')
      return new Nexmo(config, options)
    })
  }

  * boot () {
    this.app.alias('Perafan/Nexmo', 'Nexmo')
  }
}

module.exports = NexmoProvider
