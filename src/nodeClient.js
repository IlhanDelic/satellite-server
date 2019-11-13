"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const http = require('http');
var express_1 = __importDefault(require("express"));
var app = express_1.default();
// Declare an EventSource
var Source = require("eventSource");
var source1 = new Source('http://localhost:5000');
var source2 = new Source('http://localhost:5000/countdown');
app.get('/', function (req, res) {
    res.send('hello there');
});
app.listen(process.env.PORT || 3000, function () { return console.log("go to http://localhost:3000 or https://sse-test2.herokuapp.com"); });
// Handler for events without an event type specified
source1.onmessage = function (e) {
    if (e.lastEventId === '-1') {
        // This is the end of the stream
        source1.close();
    }
    else {
        console.log(e.data);
        // Process message that isn't the end of the stream...
    }
};
source2.addEventListener('message', function (e) {
    console.log(e.data);
    // Do something - event data will be in e.data,
    // message will be of type 'ping'
});
