$(document).ready(function(){

   $('body').on('click', '#delete', function () {
    //alert($(this).val());
       $('#dell').val($(this).val());
  });

 $('body').on('click', '#dell', function () {
 // alert($(this).val());
     $.get('/delete/'+$(this).val(),function(result){
      window.location.href='/adminMeasure';
     });
  });



  
  


});