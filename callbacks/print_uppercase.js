var getHTML = require('../http-functions.js')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printHTML (html) {
  console.log(html.toUpperCase());
}


console.log(getHTML(requestOptions, printHTML));