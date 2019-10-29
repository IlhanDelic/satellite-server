//import express = require("express");
import * as statusController from './controllers/status'; // hier worden de functies van status geimporteerd
const express = require('express')
const PORT = process.env.PORT || 5000
const app = express();
express()
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.get('/', statusController.hi); // get bij link/hi voer functie hi uit van status
app.post('/nice', statusController.nice);  // post bij link/nice en voer dan nice functie uit status uit
app.get('/wat', statusController.wat);
export default app;