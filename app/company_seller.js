var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.CompanySellerMgr = {


UpdateCompanySellerPhone : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `phone` = ?,`update_time`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },
  
UpdateCompanyEmail : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `email` = ?,`update_time`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },



	};