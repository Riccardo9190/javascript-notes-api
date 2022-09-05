require('./config/database');

const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const usersRouter = require('./src/routes/users');
const notesRouter = require('./src/routes/notes');

const app = express();

app.use((req, res, next) => {
  res.header("Acess-Control-Allow-Origin", "*");
  app.options('*', cors()) 
  next();
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;
