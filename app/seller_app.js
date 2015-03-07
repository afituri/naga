var mysqlMgr = require('./mysql').mysqlMgr,
    util=require('util');
exports.sellerMgr = {
  /* adding a new user to the system */
  GetAllSeller : function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `company_seller` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
    
  GetSellerByCompanyId : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `company_seller` WHERE `status` <> 0 AND `company_idcompany` = ?',id,function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  GetNameById : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `first_name`,`last_name` FROM `company_seller` WHERE `status` <> 0 AND`idcompany_seller` = ? ',id,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  GetEmailById : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `email` FROM `company_seller` WHERE `status` <> 0 AND`idcompany_seller` = ? ',id,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
  GetLevelById : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `level` FROM `company_seller` WHERE `status` <> 0 AND`idcompany_seller` = ? ',id,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  GetStatusById : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `status` FROM `company_seller` WHERE `status` <> 0 AND`idcompany_seller` = ? ',id,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  checkEmailSaller : function(email,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `status` FROM `company_seller` WHERE `status` = 1 AND`email` = ? ',email,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  UpdateFirstName : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `first_name` = ?,`modify_date`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(rec); 
        }
      });
    });
  },

  UpdateLastName : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `last_name` = ?,`modify_date`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(rec); 
        }
      });
    });
  },
  
  UpdateEmail : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `email` = ?,`modify_date`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(rec); 
        }
      });
    });
  },
  
  UpdateLevel : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `level` = ?,`modify_date`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(rec); 
        }
      });
    });
  },
  
  DeleteSeller : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_seller` SET `status` = ?,`modify_date`=? WHERE `idcompany_seller` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(rec); 
        }
      });
    });
  },
  
};
