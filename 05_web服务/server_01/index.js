const server = require('./server.js');
const router = require('./router.js');
const requestHandlers = require('./requestHandlers.js');

// 将请求路径和对应的请求处理函数利用对象做对应(一些请求处理程序的集合)
var handle = {
  '/': requestHandlers.start,
  '/start': requestHandlers.start,
  '/upload': requestHandlers.upload,
  '/showpic': requestHandlers.showPic
};

// 启动
server.start(router.route, handle);