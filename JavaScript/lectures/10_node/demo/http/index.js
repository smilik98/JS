var http = require('http');
var url = require('url');

const server = http.createServer(function (request, response) {
    const urlParts = url.parse(request.url, true);
    const query = urlParts.query;
    response.end(`<div style="font-size: 32px">${query.name} ${Math.random() > 0.5 ? 'loves' : 'hates'} NodeJS</div>`);
})

server.listen(8000);