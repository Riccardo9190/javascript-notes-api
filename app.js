require('./config/database');

const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const corsConfig = require('./cors_config')

const usersRouter = require('./src/routes/users');
const notesRouter = require('./src/routes/notes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors(corsConfig))


app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;

