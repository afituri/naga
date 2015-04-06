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

  getSchoolLimit :function(limit,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT school.name AS schoolName, school.name_en AS schoolName_en, school.latit AS latitude, school.longit AS longitude, mahalla.name AS mahallaName, area.name AS areaName, city.name AS cityName FROM `school`,`mahalla`,`area`,`city` WHERE `school`.`mahalla_idmahalla`=`mahalla`.`idmahalla` AND `mahalla`.`area_idarea`=`area`.`idarea` AND `area`.`city_idcity`=`city`.`idcity` limit ?,10 ; SELECT count(*) as cnt FROM `mahalla` WHERE `status` <> 0 ',limit, function(err, result) {
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
