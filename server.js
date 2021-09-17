const express = require('express');
const morgan = require('morgan');
// static pages were added using path and fs modules.


// requires the info above and below to connect to a server, no express needed yet.
const hostname = 'localhost';
const port = 4000;

const app = express();
app.use(morgan('dev'));

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an FF Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}: ${port}/`);
});
// Basic Express set up.
