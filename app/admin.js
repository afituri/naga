var mysqlMgr = require('./mysql').mysqlMgr,
    util=require('util');
exports.AdminMgr = {
  /* adding a new user to the system */
  GetAllAdmin : function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `admin` WHERE `status` <> 0',  function(err, result) {
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
      conn.query('SELECT * FROM `admin` WHERE `status` <> 0 AND `idadmin` = ?',id,function(err, result) {
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
      conn.query('SELECT `name` FROM `admin` WHERE `status` <> 0 AND`idadmin` = ? ',id,  function(err, result) {
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
      conn.query('SELECT `email` FROM `admin` WHERE `status` <> 0 AND`idadmin` = ? ',id,  function(err, result) {
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
      conn.query('SELECT `level` FROM `admin` WHERE `status` <> 0 AND`idadmin` = ? ',id,  function(err, result) {
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
      conn.query('SELECT `status` FROM `admin` WHERE `status` <> 0 AND`idadmin` = ? ',id,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  checkEmailAdmin : function(email,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT `status` FROM `admin` WHERE `status` = 1 AND`email` = ? ',email,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  UpdateName : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `admin` SET `name` = ?,`update_time`=? WHERE `idadmin` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },
  
  UpdateEmail : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `admin` SET `email` = ?,`update_time`=? WHERE `idadmin` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },
  
  UpdateLevel : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `admin` SET `level` = ?,`update_time`=? WHERE `idadmin` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },
  
  DeleteAdmin : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `admin` SET `status` = ?,`update_time`=? WHERE `idadmin` = ?',  [body.value,date,body.pk],  function(err, result) {
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
