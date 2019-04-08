var getHTML = require('../http-functions.js')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printHTML (html) {
  console.log(html.toLowerCase());
}


console.log(getHTML(requestOptions, printHTML));