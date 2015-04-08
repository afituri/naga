$(document).ready(function(){

  $.validator.addMethod("valueNotEquals", function(value, element, arg){
    return arg != value;
  }, "Value must not equal arg.");

  $("#addAdmin").validate({
    rules:{
      name:{
        required: true,
      },
      email:{
        required: true,
        email: true,
      },
      reEnterEmail:{
        required: true,
        email: true,
        equalTo: "#email",
      },
      password:{
        required : true,
        minlength: 5,
      },
      confirmPassword:{
        required : true,
        equalTo: "#password"
      },
      level: {
        valueNotEquals: "-1"
      },
    },
    messages:{
      name:{
        required: "Please enter the full name !",
      },
      email:{
        required: "Please enter the email address !",
      },
      reEnterEmail:{
        required: "Please Re-enter the email address !",
        equalTo: "Please enter the same email address again !"
      },
      password:{
        required: "Please enter the password !",
        minlength: "Should be your password at least 5 characters !",
      },
      confirmPassword:{
        required: "Please enter the confirm password !",
        minlength: "Should be your password at least 5 characters !",
      },
      level: {
        valueNotEquals: "Please choose the admin validity",
      },
    },
  });

  $('body').on('click', '#btnSubmit', function () {
    $.notify('You successfully read this important alert message.', {
      type: 'success',
      allow_dismiss: true,
      placement: {
        from: 'top',
        align: 'center'
      }
    });
  });  
});
