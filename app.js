require('./config/database');

var cors = require('cors');
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

var express = require('express');
var logger = require('morgan');

var usersRouter = require('./src/routes/users');
var notesRouter = require('./src/routes/notes');

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;

