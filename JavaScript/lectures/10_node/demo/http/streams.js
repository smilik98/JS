const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function (request, response) {
    fs.createReadStream('./index.html').pipe(response);
})

server.listen(8000);
