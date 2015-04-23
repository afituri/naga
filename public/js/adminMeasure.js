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
        $('#MeasureTable').empty();
        // $('.pagination').hide();
        for(key in result){
          $('#MeasureTable').append('<tr data-id='+result[key].idmeasure+'><td><a id="name'+result[key].idmeasure+'" href="#" data-type="text" data-pk="'+result[key].idmeasure+'" class="editable editable-click editable-disabled" tabindex="-1">'+result[key].name+'</a></td><td ><a id="name_en'+result[key].idmeasure+'" href="#" data-type="text" data-pk="'+result[key].idmeasure+'" class="editable editable-click editable-disabled" tabindex="-1">'+result[key].name_en+'</a></td><td class= "text-right"><a id="view"  data-toggle="modal" class="btn btn-primary btn-xs" href= "/sizes/'+result[key].idmeasure+'"><span class="glyphicon glyphicon-eye-open"></span></a></td><td class ="text-right "> <button id="enable" data-title="Edit" data-toggle="modal" class="btn btn-info btn-xs"  data-value="'+result[key].idmeasure+'"><span class="glyphicon glyphicon-pencil"> </button></td><td class="text-right "><button id="delete" href="#del" data-toggle="modal" class="btn btn-danger btn-xs"  value='+result[key].idmeasure+'><span class="glyphicon glyphicon-trash"></span></a></td> </tr>');
        }
      });  
    }
    else{
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


  $("#formMeasure").submit(function() {
    $.post("/addMeasure", $("form").serializeObject(), function(data, error){
      if(data.stat !=true){
        // $("#err").empty();
        // for (err in data.result) {
        //   $("#err").append('<h1>'+data.result[err].msg+'</h1>');
        // }
      } 
      else {
        $("#MeasureTable").append('<tr data-id="'+data.result[0].idmeasure+'">'+
        '<td class="text-center"><a id="name'+data.result[0].idmeasure+'" href="#" data-type="text" data-pk="'+data.result[0].idmeasure+'" class="editable editable-click editable-disabled">'+data.result[0].name+'</a></td>'+
        '<td class="text-center"><a id="name_en'+data.result[0].idmeasure+'" href="#" data-type="text" data-pk="'+data.result[0].idmeasure+'" class="editable editable-click editable-disabled">'+data.result[0].name_en+'</a></td>'+
        '<td class="text-center"><button id="view" value="'+data.result[0].idmeasure+'" data-title="Edit" data-toggle="modal" class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-eye-open"></span></button>'+
        '</td><td class="text-center"><button id="enable" value="'+data.result[0].idmeasure+'" data-title="Edit" data-toggle="modal" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-pencil"></span></button>'+
        '</td><td class="text-center"><button id="delete" href="#del" data-toggle="modal" value="'+data.result[0].idmeasure+'" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span></button></td></tr>');

        $('#newMeasure').modal('hide');
        $.notify({
          title: "<strong>Successful:</strong> ",
          message: "Add a new Measure has successfully"
        },{
          type: 'success',
          allow_dismiss: true,
          showProgressbar: false,
          placement: {
            from: 'top',
            align: 'center'
          },
          mouse_over: null,
          newest_on_top: true,
          animate: {
            enter: 'animated flipInY',
            exit: 'animated flipOutX'
          },
        });
      }
    });
    return false;
  });
});