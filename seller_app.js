var express = require('express');
var session = require('express-session');
var i18n = require('i18n');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var seller_routes=require('./routes/seller_routes');
var seller = express();

seller.set('views', path.join(__dirname, 'seller_views'));
seller.set('view engine', 'jade');

seller.use(favicon());
seller.use(logger('dev'));
seller.use(bodyParser.json());
seller.use(bodyParser.urlencoded());
seller.use(cookieParser());
seller.use(express.static(path.join(__dirname, 'public')));
seller.use(session({secret: 'NagaDev',resave: true,saveUninitialized: true}));
// init i18n module for this loop
seller.use(i18n.init);
seller.use('/seller',seller_routes);




module.exports = seller;
