'use strict'

const Env = use('Env')

module.exports = {
  /*
   |--------------------------------------------------------------------------
   | API Key from Nexmo
   |--------------------------------------------------------------------------
   */
  apiKey: Env.get('NEXMO_KEY'),
  /*
   |--------------------------------------------------------------------------
   | API SECRET from Nexmo
   |--------------------------------------------------------------------------
   */
  apiSecret: Env.get('NEXMO_SECRET'),
  /*
   |--------------------------------------------------------------------------
   | Additional options for the constructor
   |--------------------------------------------------------------------------
   */
  options: {
      // If true, log information to the console
    debug: false,
    // append info the the User-Agent sent to Nexmo
    // e.g. pass 'my-app' for /nexmo-node/1.0.0/4.2.7/my-app
    appendToUserAgent: 'my-app',
    // Set a custom logger
    logger: {
      log: function() {

      },
      info: function() {

      },
      warn: function() {

      }
    }
  }
};
