var http = require("http");

var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
});

server.listen(3000);

console.log("Server running on port 3000");