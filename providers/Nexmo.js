'use strict'

const { ServiceProvider, Ioc } = require('@adonisjs/fold');
const Nexmo = require('../src/Nexmo');

class NexmoProvider extends ServiceProvider {

    register() {
        const Config = this.app.use('Adonis/Src/Config')
        this.app.singleton('Perafan/Nexmo', () => {
            const config = {
                apiKey: Config.get('nexmo.apiKey'),
                apiSecret: Config.get('nexmo.apiSecret'),
                applicationId: Config.get('nexmo.appId'),
                privateKey: Config.get('nexmo.privateKeyPath')
            }
            const options = Config.get('nexmo.options')
            return Nexmo.initialize(config, options)
        })
    }

    * boot() {
        Ioc.alias('Nexmo', 'Perafan/Nexmo')
    }
}

module.exports = FirebaseProvider;
