"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
console.log("a");
http.get({
    agent: false,
    path: '/',
    hostname: 'http://localhost:5000',
}, function (res) {
    console.log("b");
    res.on('data', function (data) {
        console.log(data.toString());
    });
});
