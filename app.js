require('babel-core/register');
require('babel-polyfill');

var express = require('express');
var app = express();
var _ = require('lodash');
var fs = require('fs');

var baseTemplate = fs.readFileSync('./baseTemplate.html');
var ClientApp = require('./jsx/index.jsx');


app.get('/', function (req, res) {
  var rendered = React.renderToString(React.createElement(ClientApp));
  this.body = _.template(baseTemplate)({body:rendered});
});

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('listening on port ' + port);
});
