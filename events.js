'use strict';
// Pubnub service configuration
// ===========================

var PubNub = require('pubnub');

var pubnub = new PubNub({
            publishKey : 'pub-c-27568134-6391-4bcf-9088-253e48015332',
            subscribeKey : 'sub-c-a33c1d62-4e0e-11e8-89ba-521aa9825b79',
            secretKey: 'sec-c-NzlhOWZmMjctYjVmNi00YmJiLTlkM2UtMmZmODQxOGRkZGVm',
            ssl: true
});



module.exports = {
  publish: function(channel, message){
    pubnub.publish({
             channel: channel,
             message: JSON.stringify(message)},
             function(status, response) {
               if (status.error) {
                 console.log(status)
               } else {
                 console.log("message Published w/ timetoken", response.timetoken)
               }
             });
  },
  subscribe: function(channel, callback){

    pubnub.addListener({

        message: function(m) {
            // handle message

            var msg = m.message; // The Payload

            callback(msg);
            }
  });
    // Subscribe to the demo_tutorial channel
    pubnub.subscribe({
        channels: [channel]
    });
  }
}
