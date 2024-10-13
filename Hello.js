http = require('node:http');

listener = function(request, response){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('<h1>Hello World?!!</h1');

}
server = http.createServer(listener);

server.listen(12000);

console.log('See My First Server');