var http = require("http")
var router = require("./router/router")

// 静态文件托管
// path.extname("index.html")
// 事件驱动 var ee = events.EventEmitter()
// 回调函数
// 来解决异步问题

var server = http.createServer(function(req, res) {
  router.statics(req, res, "./static")
})

server.listen(3000)

// 根据不同文件类型返回响应内容类型

// 解析url
