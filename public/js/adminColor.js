$(document).ready(function(){
 
  $('body').on('click','#delete', function(){
    $('#ded').val($(this).val());
  });

  $('body').on('click','#ded', function(){
    $.get('/deleteColor/'+$(this).val(),function(result){
      window.location.href='/adminColors';
    });
  });
});