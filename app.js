require('./config/database');

const express = require('express');
const logger = require('morgan');
const cors = require('cors');
// const corsHeaders = require('./middleware/cors-headers');

const corsOptions = {
  origin: 'https://js-notes-clnt.herokuapp.com/register',
  optionsSuccessStatus: 200
}

const usersRouter = require('./src/routes/users');
const notesRouter = require('./src/routes/notes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors(corsOptions))

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;

