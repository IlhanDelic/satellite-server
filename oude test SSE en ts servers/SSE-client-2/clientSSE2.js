"use strict";
// Declare an EventSource
var Source = require("eventSource");
var source1 = new Source('http://localhost:5000');
var source2 = new Source('http://localhost:5000/countdown');
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
