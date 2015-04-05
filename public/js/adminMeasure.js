$(document).ready(function(){

   $('body').on('click', '#delete', function () {
        alert($(this).val());
       $('#dell').val($(this).val());
  });

 $('body').on('click', '#dell', function () {
 alert($(this).val());
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
            $('#MeasureTable').append('<tr><td >'+result[key].name+'</td><td >'+result[key].name_en+'</td><td class= "text-right"><a id="view" data-title="Edit", data-toggle="modal" class="btn btn-primary btn-xs" href= "/sizes/'+result[key].idmeasure+'"><span class="glyphicon glyphicon-eye-open"></span></a></td><td class ="text-right "></td><td class="text-right "><button id="delete" href="#del" data-toggle="modal" class="btn btn-danger btn-xs"  value='+result[key].idmeasure+'><span class="glyphicon glyphicon-trash"></span></a></td> </tr>');
           }
         });  
       }
      }
      else
      {      
      	{
      $.get('/getMeasure',function(result){
         $('#MeasureTable').empty();
          $('.pagination').show();
           for(key in result){                                                                                                                    
            $('#MeasureTable').append('<tr><td >'+result[key].name+'</td><td >'+result[key].name_en+'</td><td class= "text-right"><a id="view" data-title="Edit", data-toggle="modal" class="btn btn-primary btn-xs" href= "/sizes/'+result[key].idmeasure+'"><span class="glyphicon glyphicon-eye-open"></span></a></td><td class ="text-right "></td><td class="text-right "><button id="delete" href="#del" data-toggle="modal" class="btn btn-danger btn-xs"  value='+result[key].idmeasure+'><span class="glyphicon glyphicon-trash"></span></a></td> </tr>');
           }
         });  
        }
       }
    });


  $('body').on('click', '#view', function () {
    window.location.href='/sizes/'+$(this).val();
  });





  
  


});