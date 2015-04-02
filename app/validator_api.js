

module.exports = {
  isCity : function (req,cb) {
    isName(req,'name',' name required');           //Validate name
    isName(req,'name_en',' name_en required');
    var errors = req.validationErrors();  
    if( !errors){  
      cb(null,true);
    }else {   //Display errors to user
      cb(null,errors);
    }
  }, 
};





function  isEmail (req,name,msg) {
  return req.assert(name, msg).isEmail();  //Validate email
}

function  isName (req,name,msg) {
  return req.assert(name, msg).notEmpty();  //Validate email
}