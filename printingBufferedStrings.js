function getAndPrintHTML () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    var outputData = '';

    response.on('data', function(data) {
      console.log('Chunk Received. Length', data.length);
      outputData += data;
      console.log('Stream data is', outputData);
    });

    response.on('end', function() {
      console.log('Response stream completed');
    });

  });

}

console.log(getAndPrintHTML());