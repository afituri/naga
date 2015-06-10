var express = require('express');
var session = require('express-session');
var i18n = require('i18n');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var user_routes=require('./routes/user_routes');
var passport = require('passport');
var user = express();

user.set('views', path.join(__dirname, 'user_views'));
user.set('view engine', 'jade');

user.use(favicon());
user.use(logger('dev'));
user.use(bodyParser.json());
user.use(bodyParser.urlencoded());
user.use(cookieParser());
user.use(express.static(path.join(__dirname, 'public')));
user.use(session({secret: 'NagaDev',resave: true,saveUninitialized: true}));
// init i18n module for this loop
user.use(passport.initialize());
user.use(passport.session());
user.use(i18n.init);
user.use('/',user_routes);




module.exports = user;
