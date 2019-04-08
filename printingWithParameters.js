function getAndPrintHTML (options) {

  var https = require('https');

  https.get(options, function(response) {
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

console.log(getAndPrintHTML(requestOptions));