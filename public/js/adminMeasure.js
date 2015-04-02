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


 $('#search').on('input', function(){
 	var info=$('#search').val();
 	if(info )
 	{

     {
      $.get('/search/'+$('#search').val(),function(result){
         
         $('#MeasureTable').empty();
         $('.pagination').hide();
           for(key in result){
            $('#MeasureTable').append('<tr><td >'+result[key].name+'</td><td >'+result[key].name_en+'</td></tr>');
           }
         });  
       }
      }
      else
      {
      
      	{
      $.get('/getMeasure',function(result){
         $('#MeasureTable').empty();
         $('.pagination').hide();
           for(key in result){
            $('#MeasureTable').append('<tr><td >'+result[key].name+'</td><td >'+result[key].name_en+'</td></tr>');
           }
         });  
       }
      }
      });





  
  


});