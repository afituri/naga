$(document).ready(function(){
  $('body').on('click', '#delete', function(){
    //  alert($(this).val());
    $('#dell').val($(this).val());
  });

  $('body').on('click', '#dell', function(){
    // alert($(this).val());
    $.get('/delete/'+$(this).val(),function(result){
      window.location.href='/adminMeasure';
    });
  });

  $('#search').on('input', function(){
 	  var info=$('#search').val();
 	  if(info){
      $.get('/search/'+$('#search').val(),function(result){
<<<<<<< HEAD
         $('#MeasureTable').empty();
           for(key in result){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            $('#MeasureTable').append('<tr data-id='+result[key].idmeasure+'><td><a id="name'+result[key].idmeasure+'" href="#" data-type="text" data-pk="'+result[key].idmeasure+'" class="editable editable-click editable-disabled" tabindex="-1">'+result[key].name+'</a></td><td ><a id="name_en'+result[key].idmeasure+'" href="#" data-type="text" data-pk="'+result[key].idmeasure+'" class="editable editable-click editable-disabled" tabindex="-1">'+result[key].name_en+'</a></td><td class= "text-right"><a id="view"  data-toggle="modal" class="btn btn-primary btn-xs" href= "/sizes/'+result[key].idmeasure+'"><span class="glyphicon glyphicon-eye-open"></span></a></td><td class ="text-right "> <button id="enable" data-title="Edit" data-toggle="modal" class="btn btn-info btn-xs"  data-value="'+result[key].idmeasure+'"><span class="glyphicon glyphicon-pencil"> </button></td><td class="text-right "><button id="delete" href="#del" data-toggle="modal" class="btn btn-danger btn-xs"  value='+result[key].idmeasure+'><span class="glyphicon glyphicon-trash"></span></a></td> </tr> ');
           }
         });  
       }
      } else { 
               {
=======
        $('#MeasureTable').empty();
        // $('.pagination').hide();
        for(key in result){
          $('#MeasureTable').append('<tr data-id='+result[key].idmeasure+'><td><a id="name'+result[key].idmeasure+'" href="#" data-type="text" data-pk="'+result[key].idmeasure+'" class="editable editable-click editable-disabled" tabindex="-1">'+result[key].name+'</a></td><td ><a id="name_en'+result[key].idmeasure+'" href="#" data-type="text" data-pk="'+result[key].idmeasure+'" class="editable editable-click editable-disabled" tabindex="-1">'+result[key].name_en+'</a></td><td class= "text-right"><a id="view"  data-toggle="modal" class="btn btn-primary btn-xs" href= "/sizes/'+result[key].idmeasure+'"><span class="glyphicon glyphicon-eye-open"></span></a></td><td class ="text-right "> <button id="enable" data-title="Edit" data-toggle="modal" class="btn btn-info btn-xs"  data-value="'+result[key].idmeasure+'"><span class="glyphicon glyphicon-pencil"> </button></td><td class="text-right "><button id="delete" href="#del" data-toggle="modal" class="btn btn-danger btn-xs"  value='+result[key].idmeasure+'><span class="glyphicon glyphicon-trash"></span></a></td> </tr>');
        }
      });  
    }
    else{
>>>>>>> e8b11a221c56f3d4f66785a33e89d8084bb47475
      $.get('/getMeasure',function(result){
        $('#MeasureTable').empty();
        $('.pagination').show();                                                                     
        for(key in result){                                                                                                                    
          $('#MeasureTable').append('<tr data-id='+result[key].idmeasure+'><td><a id="name'+result[key].idmeasure+'" href="#" data-type="text" data-pk="'+result[key].idmeasure+'" class="editable editable-click editable-disabled" tabindex="-1">'+result[key].name+'</a></td><td ><a id="name_en'+result[key].idmeasure+'" href="#" data-type="text" data-pk="'+result[key].idmeasure+'" class="editable editable-click editable-disabled" tabindex="-1">'+result[key].name_en+'</a></td><td class= "text-right"><a id="view"  data-toggle="modal" class="btn btn-primary btn-xs" href= "/sizes/'+result[key].idmeasure+'"><span class="glyphicon glyphicon-eye-open"></span></a></td><td class ="text-right "> <button id="enable" data-title="Edit" data-toggle="modal" class="btn btn-info btn-xs"  data-value="'+result[key].idmeasure+'"><span class="glyphicon glyphicon-pencil"> </button></td><td class="text-right "><button id="delete" href="#del" data-toggle="modal" class="btn btn-danger btn-xs"  value='+result[key].idmeasure+'><span class="glyphicon glyphicon-trash"></span></a></td> </tr>');
        }
      });  
    }
  });

  $('body').on('click', '#view', function(){
    window.location.href='/sizes/'+$(this).val();
  });
});