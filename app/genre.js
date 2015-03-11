var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.GenreMgr = {
/////////////////// GENRE ///////////////////////////////////////////
  GetGenre :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `genre` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  AddGenre : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `genre` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  UpdateGenreNameAR : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `genre` SET `name` = ?,`update_time`=? WHERE `idgenre` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },
  
  UpdateGenreNameEN : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `genre` SET `name_en` = ?,`update_time`=? WHERE `idgenre` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

  UpdateGenreIdTob : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `genre` SET `tob_idtob` = ?,`update_time`=? WHERE `idgenre` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },


  DeleteGenre : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `genre` SET `status` = 0 ,`update_time` = ? WHERE `idgenre` = ?',[date,id],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
//////////////////////////////////////////////////////////////////////////
 
  
};
