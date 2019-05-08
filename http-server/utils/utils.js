const fs = require("fs")

module.exports = {
  getMime: function(extname, callback) {
    const mime_path = path.resolve(__dirname, "../static/mime.json")
    fs.readFile(mime_path, function(err, data) {
      if (err) return false
      var result = JSON.parse(data.toString())
      ee.emit("data", result)
      callback(result[extname] || "text/html")
    })
  }
}
