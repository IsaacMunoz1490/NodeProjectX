const express = require('express');
const bottomsRouter = express.Router();

bottomsRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Uploading all the bottoms for you!');
})
.post((req, res) => {
    res.end(`Will add the bottoms: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode= 403;
    res.end('PUT operation not supported on /bottoms');
})
.delete((req, res) => {
    res.end('Deleting all bottoms!');
});

module.exports = bottomsRouter;