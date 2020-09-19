var http = require('http');
const fs= require('fs');
const PORT = 3000;

var server = http.createServer(function(req,res){
	res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Hello World');
});

server.listen(PORT, function(){
    console.log("Server is runing on port ", PORT)
})