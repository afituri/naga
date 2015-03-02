$(document).ready(function() {
  $('#olvidado').click(function(e) {
    e.preventDefault();
    $('div#form-olvidado').toggle('500');
  });
  $('#acceso').click(function(e) {
    e.preventDefault();
    $('div#form-olvidado').toggle('500');
  });
  // $("#loginForm").validate({
  //   rules:{
  //     email:{
  //       required: true,
  //       email: true,
  //     },
  //   },
  //   messages:{
  //     email:{
  //       required: "الرجاء ادخال البريد الالكتروني",
  //       email: "خطأ هذا ليس بريد الكتروني"
  //     },
  //   },
  //   // errorPlacement: function (error, element) {
  //   //         alert(error.text());
  //   //     },   
  // });      
});