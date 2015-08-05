var http = require('http');
var fs = require('fs');

//404 response
function send404(response) {
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("Error 404: There's no page here.");
  response.end();
};

function onRequest(request, response) {
  if (request.method == 'GET' && request.url == '/') {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile("./index.html", function (err, data) {
    if (err) {
      console.log(err);
    }
      response.write(data);
      response.end();
    });
  } else {
    send404(response);
  }
};

http.createServer(onRequest).listen(3000);
console.log("server is now running");