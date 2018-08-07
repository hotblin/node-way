// 传入请求地址，根据不同的请求地址进行逻辑划分
exports.route = function (handle, pathname, res, req) {
  if (pathname == '/favicon.ico') {
    return false;
  };
  if (typeof handle[pathname] === 'function') {
    handle[pathname](res, req);
  } else {
    console.log('该请求无处理程序' + pathname);
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end('404 not found');
  };
};