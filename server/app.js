var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.connect(dbConfig.url, {
  useMongoClient: true
});

mongoose.connection.on('error', function() {
  console.log('Could not connect to database.  Exiting now...');
  process.exit();
});

mongoose.connection.once('open', function() {
  console.log("Successfully connected to database.");
});
var pokemon = require('./routes/pokemon.routes.js');

var app = express();

app.use('/pokemon', pokemon);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());



module.exports = app;
