var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.SchoolMgr = {
/////////////////// SCHOOL ///////////////////////////////////////////
  GetSchool :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `school` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  AddSchool : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `school` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
  UpdateSchoolNameAR : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `school` SET `name` = ?,`update_time`=? WHERE `idschool` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },
  
  UpdateSchoolNameEN : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `school` SET `name_en` = ?,`update_time`=? WHERE `idschool` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

  UpdateSchoolLatit : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `school` SET `latit` = ?,`update_time`=? WHERE `idschool` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

  UpdateSchoolLongit : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `school` SET `longit` = ?,`update_time`=? WHERE `idschool` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

  UpdateSchoolIdMahalla : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `school` SET `mahalla_idmahalla` = ?,`update_time`=? WHERE `idschool` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },
  // DeleteSchool : function(id,cb){
  //   mysqlMgr.connect(function (conn) {
  //     var date = new Date();
  //     conn.query('UPDATE `school` SET `status` = 0 ,`update_time` = ? WHERE `idschool` = ?',[date,id],  function(err, result) {
  //       conn.release();
  //       if(err) {
  //         util.log(err);
  //       } else {
  //         cb(result);
  //       }
  //     });
  //   });
  // },
//////////////////////////////////////////////////////////////////////////
 
  
};
