require('./config/database');

const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const usersRouter = require('./src/routes/users');
const notesRouter = require('./src/routes/notes');

const app = express();

const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors(corsOptions))

app.use('/users', usersRouter);
app.use('/notes', notesRouter)

module.exports = app;
