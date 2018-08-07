var fs = require('fs');


// 读文件
fs.readFile('./fs.js', (err, data) => {
  if (!err) {
    console.log('成功');
    console.log(JSON.stringify(data));
    console.log(data.toString());
    return false;
  }
  throw new Error(err);
});


// 写入文件, 如果存在文件会覆盖
fs.writeFile('t.txt', 'good', 'utf8', (err) => {

});


// 写日志使用，append到某文件
fs.appendFile('t.txt', 'goods', (err) => {
  if (err) {
    return false
  }
  console.log('追加成功');
});



// 读取目录以及目录下面的文件
fs.readdir('./', (err, data) => {})


// 重命名 剪切文件
fs.rename('./fs.js', './b.js', (err) => {
  if (err) return
})
fs.rename('./fs.js', '../fs.js', err => {})


// 删除目录 只能用来删除目录的
fs.rmdir('./', (err) => {
  if (err) return;
});


// 删除文件
fs.unlink('./fs.js', (err) => {
  if (err) return;
})


// 判断服务器上面是否有某个目录,存在就执行操作，不存在就创建
fs.stat('./upload', (err, stats) => {
  if (err) {
    fs.mkdir('./upload', (error) => {
      // 创建新文件夹
    })
    return;
  }
  console.log(stats);
})

// 找出某目录下的所有目录，并且拿到目录列表
fs.readdir('./', (err, data) => {
  if (err) return;
  // 需要判断是目录还是文件
  for (var i = 0; i < data.length; i++) {
    // 循环内部不能异步代码，for循环是立刻执行完毕，可是内部异步代码还在执行
    ((i) => {
      if (i == data.length) {

      }
      fs.stat(data[i], (error, stats) => {
        if (data[i].isDirctory) {} else {}
      })
    })(i)
  }
})


// fs 通过文件流的方式读取文件
var fileReadStream = fs.createReadStream('./fs.js');
var str = '';

fileReadStream.on('data', (chunk) => {
  str += chunk;
})

fileReadStream.on('end', () => {})

fileReadStream.on('error', err => {})

// 通过文件流的方式写入文件
var fileWriteStream = fs.createWriteStream();
fileWriteStream.write('fdsfsf', 'utf8');
fileWriteStream.on('error', (err) => {})
fileWriteStream.on('end', () => {})
fileWriteStream.on('finish', err => {})


// 管道流
fileReadStream.pipe(fileWriteStream);