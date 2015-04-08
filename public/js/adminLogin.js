$(document).ready(function() {
  $('#olvidado').click(function(e) {
    e.preventDefault();
    $('div#form-olvidado').toggle('500');
  });
  $('#acceso').click(function(e) {
    e.preventDefault();
    $('div#form-olvidado').toggle('500');
  });
  $("#loginForm").validate({
    //alert("DD");
      rules:{
        email:{
          required: true,
          email: true,
        },
      },
      messages:{
        email:{
          required: "Please enter your email address !",
          // email: "خطأ هذا ليس بريد الكتروني"
        },
      },
      errorPlacement: function(error, element) {
        if (element.attr("name") == "email") {
            error.insertAfter("#form-group");
        } else {
            error.insertAfter(element);
        }
      }  
  });
  // $('body').on("click","#btnLogin",function(){
  //   alert("test2222");
  //   $("#loginForm").submit();
  // });

  // $('body').on("submit","#loginForm",function(data){
  //   alert(data);
  //   var obj=$('#loginForm').serializeObject();
  //   if (obj.email)
  //   {
  //     $.post("/adminPage",obj,function(date){
  //       alert("تم الدخول بنجاح");
  //     });
  //   }
  //   else
  //   {
  //     alert("خطأأأأأأأأأأأأ");
  //   }
  // });  
});
$(".reveal").mousedown(function() {
    $(".pwd").replaceWith($('.pwd').clone().attr('type', 'text'));
})
.mouseup(function() {
  $(".pwd").replaceWith($('.pwd').clone().attr('type', 'password'));
})
.mouseout(function() {
  $(".pwd").replaceWith($('.pwd').clone().attr('type', 'password'));
});

$('body').show();
NProgress.start();
setTimeout(function() { 
  NProgress.done(); 
  $('.fadeIn').removeClass('out'); 
}, 1000)

$('#btnLogin').on('click', function () {
    $(this).button('loading')
    // business logic...
     // $btn.button('complete')
});




