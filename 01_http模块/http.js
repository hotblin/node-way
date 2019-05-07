var http = require("http")

// 创建一个简单的http服务器
var server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
  res.write("hello wrold")
  res.end() // 结束响应
})

server.listen(1234)
