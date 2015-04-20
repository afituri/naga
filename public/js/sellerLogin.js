$(document).ready(function() {
  $('#olvidado').click(function(e) {
    e.preventDefault();
    $('div#form-olvidado').toggle('500');
  });
  $('#acceso').click(function(e) {
    e.preventDefault();
    $('div#form-olvidado').toggle('500');
  });
  $("#sellerForm").validate({
    rules:{
      email:{
        required: true,
        email: true,
      },
      password:{
        required:true,
      }
    },
    messages:{
      email:{
        required: "Please enter your email address !",
      },
      password:{
        required: "Please enter your password !"
      },
    },
    errorPlacement: function (error, element) {
      if ($(element).is('.form-group.input-group')) {
          element.next().after(error);
      } else {
          error.insertAfter(element);
      }
    },
    highlight: function(element) {
      $('.form-group.input-group').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass('animated shake');
      });
    },
  });

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
$(window).load(function() {
  NProgress.done(); 
  $('.showIn').removeClass('out');
  $('.showIn').addClass('flipInY');
});
