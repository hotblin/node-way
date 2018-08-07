var url = require('url');

var http = require('http');

// url.parse() 解析 url 模块 url.resolve()
http.createServer((req, res) => {
  let result = url.parse(req.url, true);
  console.log(result.query);
  res.end(result.query);
}).listen(3456);

// supervisor

/**
 * npm i supervisor -g
 * supervisor xx.js
 */