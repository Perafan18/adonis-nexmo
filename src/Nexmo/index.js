'use strict'

const nexmo = require('nexmo')

class Nexmo {
    initialize(config, options) {
        return new nexmo(config, options)
    }
}

module.exports = { Nexmo }
