$(document).ready(function(){
  $('body').on('click', '#view', function () {
    window.location.href='/adminTypeBusiness/adminGenre';

      });

   $('body').on('click','#delete',function () {
  	$('#deletee').val($(this).val());
    });
  
  $('body').on('click','#deletee',function () {
  	$.get('/deleteTOB/'+$(this).val(),function(result){
  		window.location.href='/adminTypeBusiness';
	})
  });







  });