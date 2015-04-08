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
        $("#tbody").append('<tr><td class="text-center">'+data.result[0].areaName+'</td><td class="text-center">'+data.result[0].areaName_en+'</td><td class="text-center">'+data.result[0].cityName+'</td><td class="text-center">'+data.result[0].cityName_en+'</td><td class="text-center"><button id="delete" href="#del" data-toggle="modal" data-value="'+data.result[0].idcity+'" data-placement="top" title="" class="btn btn-danger btn-xs" data-original-title="Delete City"><span class="glyphicon glyphicon-trash"></span></button></td></tr>');
        $('#newArea').modal('hide');

      }
    });
    return false;
  });

  
  
});



  
