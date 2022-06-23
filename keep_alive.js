var http = require('http');

http.createServer(function (req, res) {
  res.write("royalstereo.js is online!");
  res.end();
}).listen(8080);