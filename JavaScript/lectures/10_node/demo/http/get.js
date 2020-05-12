const http = require('http');
const https = require('https');
const url = require('url');

const server = http.createServer(function (request, response) {
    https.get('https://nodejs.org/api/http.html', (res) => {
        res.pipe(response);
    })
})

server.listen(8000);
