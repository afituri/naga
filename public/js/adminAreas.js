$(document).ready(function(){
  $('body').on('click', '#save', function () {
    $('#formArea').submit();
  });
  $("#formArea").submit(function() {
    $.post("/addAreas", $("form").serializeObject(), function(data, error){
      if(data.stat !=true){
        $("#err").empty();
        for (err in data.result) {
          $("#err").append('<h1>'+data.result[err].msg+'</h1>');
        }
      }else{
        $("#tbody").append('<tr data-id="'+data.result[0].idarea+'">'+
          '<td class="text-center"> <a id="name'+data.result[0].idarea+'" href="#" data-type="text" data-pk="'+data.result[0].idarea+'" class="editable editable-click">'+data.result[0].areaName+'</a></td>'+
          '<td class="text-center"> <a id="name_en'+data.result[0].idarea+'" href="#" data-type="text" data-pk="'+data.result[0].idarea+'" class="editable editable-click">'+data.result[0].areaName_en+'</a></td>'+
          '<td class="text-center">'+data.result[0].cityName+'</td>'+
          '<td class="text-center">'+data.result[0].cityName_en+'</td>'+
          '<td class="text-center">'+
          '<button id="enable" data-value="'+data.result[0].idarea+'" data-placement="top" title="Edit City" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-pencil"></span></button></td><td class="text-center">'+
          '<button id="delete" href="#del" data-toggle="modal" data-placement="top" title="Delete" value="'+data.result[0].idarea+'" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash">  </span></button></td></tr>');
        $('#newArea').modal('hide');
      }
    });
    return false;
  });

  
  
});



  
