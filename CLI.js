var http = require("http");

var goodPort = 7000;
var badPort = 7500;


function goodHandleRequest(request, response) {
	 response.end("It Works!! Path Hit: " + request.url + "and you are an awesome coder");
}

var goodServer = http.createServer(goodHandleRequest);

goodServer.listen(goodPort, function() {
	console.log("Server listening on: http://localhost:%s", goodPort);
});

function badHandleRequest(request, response) {
	 response.end("It Works!! Path Hit: " + request.url + "shut up and keep coding");
}

var badServer = http.createServer(badHandleRequest);

badServer.listen(badPort, function() {
	console.log("Server listening on: http://localhost:%s", badPort);
});