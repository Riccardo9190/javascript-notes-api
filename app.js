require('./config/database');

var express = require('express');
var logger = require('morgan');
var cors = require('cors');

var usersRouter = require('./src/routes/users');
var notesRouter = require('./src/routes/notes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;
