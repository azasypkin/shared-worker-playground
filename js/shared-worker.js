(function(exports) {
  'use strict';

  var messageOrigins = [];

  exports.onconnect = function(e) {
    var port = e.ports[0];

    port.addEventListener('message', function(e) {
      messageOrigins.push(e.data);

      port.postMessage({
        messageCount: messageOrigins.length,
        origins: messageOrigins
      });
    });

    port.start();
  }
})(self);