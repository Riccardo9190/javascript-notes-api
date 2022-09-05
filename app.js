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
var whitelist = [
  'https://js-notes-clnt.herokuapp.com/',
];
var corsOptions = {
  origin: function(origin, callback){
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;

