$(document).ready(function(){
 
  $('body').on('click','#delete', function(){
    $('#deletee').val($(this).val());
  });

  $('body').on('click','#deletee', function(){
    $.get('/deleteColor/'+$(this).val(),function(result){
      window.location.href='/adminColors';
    });
  });
});