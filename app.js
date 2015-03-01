var express = require('express');
var session = require('express-session');
var i18n = require('i18n');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var vhost = require('vhost');
var config = require('./config');
var admin = require('./admin_app');
var user =require('./user_app');
var seller =require('./seller_app');

//////////////////////////////////////////////////////////////

var app = express();

app.use(vhost(config.admin,admin));
app.use(vhost(config.user,user));
app.use(vhost(config.seller,seller));
  

// minimal config
i18n.configure({
  locales: ['en', 'ar'],
  cookie: 'locale',
  directory: "" + __dirname + "/locales",
});





// module.exports = user;
module.exports = app;
// module.exports = seller;
