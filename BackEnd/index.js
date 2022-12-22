const express = require('express');
const mongoose = require('mongoose');
const http = require("http")


const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.listen(5000, () => {
    console.log("le serveur est en marche");
});
