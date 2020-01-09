var path = require('path');
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/stream', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });
    setTimeout(function () {
        res.write('data: Sending 1\n\n');
    }, 1000);
    setTimeout(function () {
        res.write('data: Sending 2\n\n');
    }, 2000);
    setTimeout(function () {
        res.write('data: Sending 3\n\n');
    }, 3000);
    setTimeout(function () {
        res.end('data: im going to sleep now\n\n');
    }, 3000);
});
app.listen(5000);
