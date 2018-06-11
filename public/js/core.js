var http = require("http");
var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Hello world");
});
var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({port : 3000});

server.listen(3000);
wss.on("connection", function(ws){
	ws.send("Welcome!");
});