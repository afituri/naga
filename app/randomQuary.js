var mysqlMgr = require('./mysql').mysqlMgr,

util=require('util');
exports.rand = {
  /* adding a new user to the system */
  saveRandomNumber: function(random,count,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `randomm` SET `randomNumber` = ? ,count =?',[random,count], function(err, results) {
        
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(results);
        }
      });  
    });
  }, 
  
  getRandomNumber : function(random,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select  randomNumber from randomm  where randomNumber = ? ',random,function(err, result) {
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
