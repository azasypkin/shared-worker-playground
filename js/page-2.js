(function() {
  'use strict';
  var sharedWorker = new SharedWorker('js/shared-worker.js');

  sharedWorker.port.onmessage = function(e) {
    console.log(
      'Shared worker received %s requests from %s',
      e.data.messageCount,
      e.data.origins.join(', ')
    );
  };

  sharedWorker.port.start();

  sharedWorker.port.postMessage(location.href);
})(self);