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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept Authorization"
  )
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "POST, PUT, PATCH, GET, DELETE"
    )
    return res.status(200).json({})
  }
  next()
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;

