require('./config/database');

const express = require('express');
const app = express();

const logger = require('morgan');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cors = require('cors');
app.use(cors)

const usersRouter = require('./src/routes/users');
const notesRouter = require('./src/routes/notes');

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;
