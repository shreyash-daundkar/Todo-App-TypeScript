const express = require('express');
const bodyParser= require('body-parser');
const todoRoute = require('./routes/todo');


const app = express();

app.use(bodyParser.json());

app.use('/todo', todoRoute);

app.listen(3000);