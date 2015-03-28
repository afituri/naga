var mysqlMgr = require('./mysql').mysqlMgr,

util=require('util');
exports.rand = {
  /* adding a new user to the system */

  saveOneRow :function(random,random_code,amount,serial,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `prepaid` (`prepaid`, `prepaid_hash`,`amount`,`serial_no`) VALUES (?,?,?,?);INSERT INTO `prepaid_live` (`prepaid_hash`,`amount`,`serial_no`) VALUES (?,?,?)  ',[random,random_code,amount,serial,random_code,amount,serial], function(err, results) {
        
        conn.release();
        if(err) {
          util.log(err);
        } else {
        console.log("Saved One Row cuz it's first time ");
         cb(results);
         process.exit(code=0);
          
        }

      });  
    });
  }, 
  
  saveRandomNumber: function(random,random_code,amount,serial,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `prepaid` (`prepaid`, `prepaid_hash`,`amount`,`serial_no`) VALUES (?,?,?,?);INSERT INTO `prepaid_live` (`prepaid_hash`,`amount`,`serial_no`) VALUES (?,?,?)  ',[random,random_code,amount,serial,random_code,amount,serial], function(err, results) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          
          cb(results);
        }

      });  
    });
  }, 

  ActiveprepaidCard : function(num,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select count(*) as c,sum(amount) as s  from prepaid where status=1 and amount=? ',num,function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else { 
          cb(result);  
        }
      });
    });
  },
  
  getRandomNumber : function(random,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select  prepaid from prepaid  where prepaid = ? ',random,function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else { 
          cb(result);  
        }
      });
    });
  },

  getTotalmony : function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select  sum(amount) as totalMony from prepaid where status=1',function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else { 
          cb(result);  
        }
      });
    });
  },


  getLastNumber : function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT serial_no FROM prepaid ORDER BY idprepaid DESC LIMIT 1',function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else { 
          cb(result);  
        }
      });
    });
  },


  NumberActiveprepaidCard : function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('select count(*) as c from prepaid where status=1 ',function(err, result) {
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
