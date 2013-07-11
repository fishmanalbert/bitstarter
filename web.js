var express = require('express');

var app = express.createServer(express.logger());

var content = fs.readFileSync('index.html', 'utf8');

app.get('/', function(request, response) {
  var fs = require('fs');
  var buffer = new buffer ();
  response.send(buffer.toString('utc 8', fs.readFileSync("index.html")))});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
