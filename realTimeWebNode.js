// 1.2 Hello You
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write('Hello, this is me');
  response.end();
}).listen(8080);

// 1.3 Convert Blocking
var fs = require('fs');

fs.readFile('index.html', function(error, contents) {
	console.log(contents);
});

// 1.4 Running Your Code
node file_read.js

// 1.5 Read File in Server
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  fs.readFile('index.html', function(error, contents) {
  	response.write(contents);
    response.end();
  });
}).listen(8080);

// 1.6 Issuing a Request
curl http://localhost:8080

// 1.7 Writing Response Headers
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200, {
  	'Content-Type': 'text/html' 
  });

  fs.readFile('index.html', function(err, contents) {
    response.write(contents);
    response.end();
  });

}).listen(8080);

// 1.8 Response End
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.end('Hello, this is dog');
}).listen(8080);

// 2.2
