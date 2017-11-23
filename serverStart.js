var a = require('http');
response.writeHead(200, {"Content-Type": "text/html"});
a.createServer( function(request, response){
	response.write('we got a response ');
	response.close();
}).listen(8000);
