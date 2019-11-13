//const http = require('http');
import express, {Response, Request, Application} from "express";
const app: Application  = express();
// Declare an EventSource
const Source = require("eventSource");
const source1 = new Source('http://localhost:5000');
const source2 = new Source('http://localhost:5000/countdown');


app.get('/', (req: Request, res: Response) => {
    res.send('hello there');

});

app.listen( process.env.PORT || 3000, () => console.log("go to http://localhost:3000 or https://sse-test2.herokuapp.com"));


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
    console.log(e.data);
    // Do something - event data will be in e.data,
    // message will be of type 'ping'

})

