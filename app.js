require('./config/database');

const express = require('express');
const logger = require('morgan');
// const cors = require('cors');
// const corsHeaders = require('./middleware/cors-headers');

// const corsOptions = {
//   origin: 'https://js-notes-clnt.herokuapp.com',
//   optionsSuccessStatus: 200
// }

const usersRouter = require('./src/routes/users');
const notesRouter = require('./src/routes/notes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;

