const http = require('http');
const colors = require('colors');
const Server = {}

const handlerServer = function(req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Hola Mundo desde NodeJS</h1>');
    res.end();
}

const server = http.createServer(handlerServer);

function iniciar() {
    server.listen(3000, function() {
        console.log('Server on port 3000'.green);
    })
}

Server.iniciar = iniciar;
module.exports = Server;