require('./config/database');

const express = require('express');
const logger = require('morgan');
const cors = require('cors');


const usersRouter = require('./src/routes/users');
const notesRouter = require('./src/routes/notes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next)  {
  app.options('*', cors())
  if (req.method === "OPTIONS") {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
  } else {
    res.header('Access-Control-Allow-Origin', '*');
  }

  return next()
})




app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;

