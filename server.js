const express = require('express');
const morgan = require('morgan');
const bottomsRouter = require('./routes/bottomsRouter');
const hatsRouter = require('./routes/hatsRouter');
const shoesRouter = require('./routes/shoesRouter');
const topsRouter = require('./routes/topsRouter');
// static pages were added using path and fs modules.


// requires the info above and below to connect to a server, no express needed yet.
const hostname = 'localhost';
const port = 4000;


const app = express();
app.use(morgan('dev')); //middleware for logging
app.use(express.json());

// bring in Routers
app.use('/bottoms', bottomsRouter);
app.use('/hats', hatsRouter);
app.use('/shoes', shoesRouter);
app.use('/tops', topsRouter);

app.use(express.static(__dirname + '/public')); //absolute path where the files are in

app.use((req, res) => {
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an FF Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}: ${port}/`);
});
// Basic Express set up, Morgan middleware for logging was installed
