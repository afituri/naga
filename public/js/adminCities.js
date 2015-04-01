$(document).ready(function(){
  $('body').on('click', '#sub', function () {
    $('#formCitie').submit();
  });
  $('body').on('submit', '#formCitie', function(data) {
    $.post("/addcity", $("form").serializeObject(), function(data, error){
      if(data.stat !=true){
        $("#err").empty();
        for (err in data.result) {
          $("#err").append('<h1>'+data.result[err].msg+'</h1>');
        }
      }else{
        // window.location.href="/adminCities";
        console.log(data.result[0].idcity);
        $("#tbody").append('<tr data-id="'+data.result[0].idcity+'"><td class="text-center"><a id="name'+data.result[0].idcity+'" href="#" data-type="text" data-pk="'+data.result[0].idcity+'" class="editable editable-click editable-disabled" tabindex="-1">'+data.result[0].name+'</a></td><td class="text-center"><a id="name_en'+data.result[0].idcity+'" href="#" data-type="text" data-pk="'+data.result[0].idcity+'" class="editable editable-click editable-disabled" tabindex="-1">'+data.result[0].name_en+'</a></td><td class="text-center"><button id="enable" data-value="'+data.result[0].idcity+'" data-placement="top" title="" class="btn btn-info btn-xs" data-original-title="Edit City"><span class="glyphicon glyphicon-pencil"></span></button></td><td class="text-center"><button id="delete" href="#del" data-toggle="modal" data-value="'+data.result[0].idcity+'" data-placement="top" title="" class="btn btn-danger btn-xs" data-original-title="Delete City"><span class="glyphicon glyphicon-trash"></span></button></td></tr>');
        $('#newCitie').modal('hide');

      }
    });
    return false;
  });


});