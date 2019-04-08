function getAndPrintHTML (options, callback) {

  var https = require('https');

  https.get(options, function(response) {
    response.setEncoding('utf8');

    var outputData = '';

    response.on('data', function(data) {
      console.log('Chunk Received. Length', data.length);
      outputData += data;
      callback(outputData);
      //console.log('Stream data is', outputData);
    });



    response.on('end', function() {
      console.log('Response stream completed');
    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

console.log(getAndPrintHTML(requestOptions, printHTML));