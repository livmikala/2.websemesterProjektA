const express = require('express');
const bodyParser = require('bodyparser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

let users = JSON.parse(fs.readFileSync('users.json'));
let tempOTPs = {};

app.post('/login',)