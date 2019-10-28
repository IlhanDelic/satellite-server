"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const statusController = require("./controllers/status");
const app = express();
app.set("port", process.env.PORT || 3000);
app.get('/', statusController.hi); // get bij link/hi voer functie hi uit van status
app.post('/nice', statusController.nice); // post bij link/nice en voer dan nice functie uit status uit
app.post('/wat', statusController.wat);
exports.default = app;
//# sourceMappingURL=app.js.map