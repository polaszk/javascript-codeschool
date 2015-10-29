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

// 2.2 Chat Emitter
var events = require('events');
var EventEmitter = events.EventEmitter;
var chat = new EventEmitter();

chat.on('message', function(message) {
	console.log(message);
});

// 2.3 Emitting Events
var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

chat.emit('join', 'John');
chat.emit('message', 'Hello!');

// 2.4 Request Event
var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});
server.listen(8080);

// 2.5 Listening Twice
var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.on('request', function(request, response) {
  console.log('New request coming in...');
});

server.listen(8080);

// 2.6 Listening for Close
var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.on('request', function(request, response) {
  console.log("New request coming in...");
});

server.on('close', function() {
  console.log('Closing down the server...');
});

server.listen(8080);

// 3.2 File Read Stream
var fs = require('fs');
var file = fs.createReadStream('fruits.txt');
file.on('readable', function() {
	var chunk = null;
  while (null !== (chunk = file.read())) {
    console.log(chunk.toString());
  }
});

// 3.3 File Piping
var fs = require('fs');

var file = fs.createReadStream('fruits.txt');
file.pipe(process.stdout);

// 3.4 Fixing Pipe
var fs = require('fs');

var file = fs.createReadStream('origin.txt');
var destFile = fs.createWriteStream('destination.txt');

file.pipe(destFile, { end: false });

file.on('end', function(){
  destFile.end('Finished!');
});

// 3.5 Download Server
var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('index.html');
  file.pipe(response);
}).listen(8080);

// 4.2 Missing Exports
var highfive = function() {
  console.log("smack!!");
};

module.exports = highfive;

// 4.3 Export A Function
// app.js
var myRequest = require('my_request');
myRequest('Hello, this is dog.');

// my_request.js
var http = require('http');

var myRequest = function(message) {
  var request = http.request('http://codeschool.com', function(response) {
    response.pipe(process.stdout, { end: false });
  });

  request.write(message);
  request.end();
};

module.exports = myRequest;

// 4.4 Exporting An Object 
var warn = function(message) {
  console.log("Warning: " + message);
};

var info = function(message) {
  console.log("Info: " + message);
};

var error = function(message) {
  console.log("Error: " + message);
};
 
module.exports.info = info;
module.exports.warn = warn;
module.exports.error = error;

// 4.5 Installing Local Modules
npm install underscore 

// 4.6 Installing Global Modules
npm install coffee-script -g

// 4.7 Dependency
{
  "name": "My Awesome Node App",
  "version": "1",
  "dependencies": {
        "connect": "2.1.1",
        "underscore": "1.3.3"
  }
}

// 4.8 Semantic Versioning
{
  "name": "My Awesome Node App",
  "version": "1",
  "dependencies": {
    "connect": "~2.2.1",
    "underscore": "~1.3.3"
  }
}

// 5.2 Express Routes
var express = require('express');
var app = express();

app.get('/tweets', function(request, response) {
  response.sendFile(__dirname + '/tweets.html');
});

app.listen(8080);

// 5.3 Route Params
var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(request, response) {
  response.end(quotes[request.params.name]);
});

app.listen(8080);

// 5.4 Rendering
// quote.ejs 
<h2>Quote by <%= name %></h2>
<blockquote>
  <%= quote %>
</blockquote>

// app.js
var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(req, res) {
  var quote = quotes[req.params.name];
  res.locals = {name: req.params.name, quote: quote};
  res.render('quote.ejs');
  
});

app.listen(8080);

// 5.5 URL Building
var url = require('url');

options = {
  protocol: 'http:',
  host: 'search.twitter.com',
  pathname: '/search.json?q=codeschool',
  query: { q: 'codeschool' }
};

var searchURL = url.format(options);
console.log(searchURL);

// 5.6 Doing the Request
var url = require('url');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);
var request = require('request');
request(searchURL, function(error, response, body) {
  console.log(body);
});

// 5.7 Express Server
var url = require('url');
var request = require('request');
var express = require('express');
var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};
var searchURL = url.format(options);
var app = express();

app.get('/', function(req, res) {
  request(searchURL).pipe(res);
});

app.listen(8080);

// 6.2 Setting Up socket.io Server-Side
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log('Client connected');
});

server.listen(8080);

// 6.3 Client socket.io Setup
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io.connect('http://localhost:8080');
</script>

// 6.4 Listening For Questions
<script src="/socket.io/socket.io.js"></script>
<script src="/insertQuestion.js"></script>

<script>
  var server = io.connect('http://localhost:8080');
  
  server.on('question', function(data) {
    insertQuestion(data);
  });         
</script>

// 6.5 Broadcasting Questions
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");
  client.on('question', function(data) {
    client.broadcast.emit('question', data);
  });
});

server.listen(8080);

// 6.6 Saving Client Data
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");

  client.on('question', function(question) {
    if (!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
    }
  });
});

server.listen(8080);

// 6.7 Answering Questions
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.sockets.on('connection', function(client) {
  console.log("Client connected...");
  
  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
    }
  });
});

server.listen(8080);

// 6.8 Answering Question Client
var server = io.connect('http://localhost:8080');

server.on('question', function(question) {
  insertQuestion(question);
});

server.on('answer', function(question, answer) {
  answerQuestion(question, answer);
});

//
