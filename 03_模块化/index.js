var http = require('http');
var url = require('url');
var utils = require('./utils');

console.log(utils);

var server = http.createServer((req, res) => {
  let query = url.parse(req.url);
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8"
  });

  res.end('2222');
})

server.listen(3000, '0.0.0.0');