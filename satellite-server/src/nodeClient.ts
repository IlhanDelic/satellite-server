//const http = require('http');
import express, {Response, Request, Application} from "express";
const app: Application  = express();
// Declare an EventSource
const Source = require("eventSource");
const source1 = new Source('http://localhost:5000/welcome');
const source2 = new Source('http://localhost:5000/countdown');

// Handler for events without an event type specified
source1.onmessage = (e: any) => {
    if (e.lastEventId === '-1') {
        // This is the end of the stream
        source1.close();
    } else {
        console.log(e.data);
        // Process message that isn't the end of the stream...
    }
};

source2.addEventListener('message', (e: any) => {
    // Do something - event data will be in e.data,
    if (e.lastEventId === 'times up!') {
        // This is the end of the stream
        source1.close();
    } else {
        console.log(e.data);
        // Process message that isn't the end of the stream...
    }
})

