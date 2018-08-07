// 根据用户访问，返回不同的页面

var http = require('http');
var fs = require('fs');
var path = require('path');

var pathName = null;
var server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8"
  })
  pathName = req.url;
  if (pathName == '/') {
    pathName = '/index.html';
  }
  if (pathName == '/favicon.ico') {
    return false;
  }
  fs.writeFile(path.join(pathName, '/index.html'), (err, data) => {
    if (err) return
    res.end(data);
  })
})

server.listen(9999, "0");

// 获取文件的后缀名

let extName = path.extname('./index.js');

// 根据请求文件类型，返回不同文件
const extNameFun = (fileType) => {

}