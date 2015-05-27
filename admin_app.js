var express = require('express');
var session = require('express-session');
var i18n = require('i18n');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/admin_routes');
var company = require('./routes/admin_routes/company');
var address = require('./routes/admin_routes/address');
var measure = require('./routes/admin_routes/measure');
var typeBusiness = require('./routes/admin_routes/typeBusiness');
var stock = require('./routes/stock_routes');
var admin = express();
var expressValidator = require('express-validator');   
admin.set('views', path.join(__dirname, 'admin_views'));
admin.set('view engine', 'jade');

admin.use(favicon());
admin.use(logger('dev'));
admin.use(bodyParser.json());
admin.use(bodyParser.urlencoded());
admin.use(expressValidator({
  customValidators: {
    isArray: function(value) {
      return value.match(/ain/g);
    }, 
    gte: function(param, num) {
      return param >= num;
    }
  }   
}));
admin.use(cookieParser());
admin.use(express.static(path.join(__dirname, 'public')));
admin.use(session({secret: 'NagaDev',resave: true,saveUninitialized: true}));
admin.use(i18n.init);
admin.use('/',routes);
admin.use('/company',company);
admin.use('/address',address);
admin.use('/measure',measure);
admin.use('/stock',stock);
admin.use('/typeBusiness',typeBusiness);




module.exports = admin;
