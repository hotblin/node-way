var qs = require('querystring');
var formidable = require("formidable");
var path = require('path');
var fs = require('fs');

// 将res作为参数传递，是利用了回调函数来处理阻塞， 在响应达成对应执行不同的res，如果不添加参数，不同的接口有不同的异步操作会阻塞其他请求的运行
const htmlBody = `
      <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      </head> 
      <body>
        <form action="/upload" enctype="multipart/form-data" method="post">
          <input type="file" name="upload">
          <input type="submit" value="Upload file" />
        </form>
      </body>
      </html>`;

// 利用表单来post

function start(res, req) {
  console.log("Request handler 'start' was called.");
  res.writeHead(200, {"Content-Type": "text/html"});
  // setTimeout(_ => {res.end('10s 后返回数据'); }, 10000);
  res.end(htmlBody);
};

function upload(res, req) {
  // res.writeHead(200, {"Content-Type": "text/plain"}) console.log("Request
  // handler 'upload' was called."); res.end(qs.parse(postData).text);
  var form = new formidable.IncomingForm();
  form.uploadDir = 'tmp';
  form.parse(req, function (error, fields, files) {
    try {
      fs.renameSync(files.upload.path, './' + form.uploadDir + "/test.png");
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("received image: <br/>");
      res.write("<img src='/showpic' />");
      res.end();
    } catch (e) {
      res.writeHead(500, {"Content-Type": "text/html"});
      res.end('error');
    }
  })
};

function showPic(res, req) {
  try {
    fs
      .readFile(path.join(__dirname, '/tmp/test.png'), 'binary', function (err, file) {
        if (err) {
          res.writeHead(500, {"Content-Type": "text/plain"});
          res.end(err);
        } else {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.write(file, 'binary');
          res.end();
        }
      });
  } catch (err) {
    res.writeHead(500, {"Content-Type": "text/plain"});
    res.end(err);
  }
};


exports.start = start;
exports.upload = upload;
exports.showPic = showPic;