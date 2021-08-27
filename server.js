const http = require('http');
// requires the info above and below to connect to a server, no express needed yet.
const hostname = 'localhost';
const port = 4000;

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode =200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<html><body><h1>Hello CUH!</h1></body></html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}: ${port}/`);
});
// Basic server set up is complete