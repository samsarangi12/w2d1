var getHTML = require('../http-functions.js')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printHTML (html) {
  let output = html.split('').reverse().join('');
  console.log(output);
}


console.log(getHTML(requestOptions, printHTML));