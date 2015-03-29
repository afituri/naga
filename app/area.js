var mysqlMgr = require('./mysql').mysqlMgr,
var v =
util=require('util');
exports.areaMgr = {

  getAreaNameById : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select name,name_en from area  where idarea = ? ',id,function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }          
      });
    });
  }
  
  };

