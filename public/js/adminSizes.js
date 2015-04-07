
$(document).ready(function(){


  $('body').on('click', '#delete', function () {
  
      $('#del').val($(this).val());
  });
 $('body').on('click', '#del', function () {
     $.get('/deleteSize/'+$(this).val(),function(result){
     	window.location.href='/sizes/'+result[0].measure_idmeasure;
     });
  });


  });