import {Response} from "express";
const http = require('http');
console.log("a");

http.get({

    agent: false,
    path: '/',
    hostname: 'https://localhost:6000',

}, (res: Response) => {

    console.log("b");
    res.on('data', data => {

        console.log(data.toString());
    })
});