var http = require('http');
var url = require('url');
var formidable = require("formidable");

exports.start = function (route, handle) {
  function onRequest(req, res) {
    var postData = '';
    var pathName = url
      .parse(req.url)
      .pathname;
    // req.setEncoding('utf8'); req.addListener('data', (chunk) => {   postData +=
    // chunk; }); req.addListener('end', () => {   route(handle, pathName, res,
    // postData); });
    route(handle, pathName, res, req);

  };
  console.log('server is running port 8888')
  http
    .createServer(onRequest)
    .listen(8888);
}