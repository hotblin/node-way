var http = require('http');


// 创建一个简单的http服务器
var server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html;charset=utf8"})
  res.write('hellw wrold');
  res.end();
});

server.listen(1234);