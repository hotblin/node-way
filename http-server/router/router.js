var fs = require("fs")
var path = require("path")
var url = require("url")
var utils = require("../utils/utils")

const getMime = utils.getMime

exports.statics = function(req, res, staticPath) {
  var pathname = url.parse(req.url).pathname
  var extname = path.extname(pathname)
  if (pathname === "/") {
    res.end("/root")
  }

  if (pathname !== "/favicon.ico") {
    fs.readFile(staticPath + "/" + pathname, function(err, result) {
      if (err) {
        // 错误返回404
      } else {
        getMime(extname, mime => {
          res.writeHead(200, {
            "Content-Type": mime + ";charset='utf-8'"
          })
          res.write(result)
          res.end()
        })
      }
    })
  }
}

exports.router = {
  login: function() {}
}
