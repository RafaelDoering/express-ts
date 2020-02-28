"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const api_router_1 = require("./src/routers/api.router");
dotenv.config();
const db = mongoose.createConnection(`mongodb://${process.env.MONGO_DOCKER_URL}/${process.env.MONGO_DOCKER_DB}`, { useNewUrlParser: true, useUnifiedTopology: true });
db.on('error', () => {
    console.log('Error connecting to database.');
});
db.once('open', () => {
    console.log('Connected to database.');
});
const app = express();
app.use('/api', api_router_1.default);
app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}.`));
