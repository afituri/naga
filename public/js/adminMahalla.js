$(document).ready(function(){
  $('body').on('click','#delete', function(){
    $('#deletee').val($(this).val());
  });

  $('body').on('click','#deletee', function(){
   $.get('/deleteMahalla/'+$(this).val(),function(result){
     window.location.href='/adminMahala';
   });
  });

  $('#city').on('change',function() {
    var id = $('#city').val();
    $.get('/getarea/'+id,function(result){
      $('#area').empty();
      for ( var i = 0; i < result.length;  i++ ) {
        $('#area').append("<option value = '"+result[i].idarea+"'>"+result[i].name+"</option>");
      }
    });
  });

  $('body').on('click', '#save', function () {
    $('#formMahala').submit();
  });

  $("#formMahala").submit(function() {
    $.post("/addMahala", $("form").serializeObject(), function(data, error){
      if(data.stat !=true){
        // $("#err").empty();
        // for (err in data.result) {
        //   $("#err").append('<h1>'+data.result[err].msg+'</h1>');
        // }
      } 
      else {
        console.log(data);
        // $("#tbody").append('<tr data-id="'+data.result[0].idcity+'"><td class="text-center"><a id="name'+data.result[0].idcity+'" href="#" data-type="text" data-pk="'+data.result[0].idcity+'" class="editable editable-click editable-disabled" tabindex="-1">'+data.result[0].name+'</a></td><td class="text-center"><a id="name_en'+data.result[0].idcity+'" href="#" data-type="text" data-pk="'+data.result[0].idcity+'" class="editable editable-click editable-disabled" tabindex="-1">'+data.result[0].name_en+'</a></td><td class="text-center"><button id="enable" data-value="'+data.result[0].idcity+'" data-placement="top" title="" class="btn btn-info btn-xs" data-original-title="Edit City"><span class="glyphicon glyphicon-pencil"></span></button></td><td class="text-center"><button id="delete" href="#del" data-toggle="modal" data-value="'+data.result[0].idcity+'" data-placement="top" title="" class="btn btn-danger btn-xs" data-original-title="Delete City"><span class="glyphicon glyphicon-trash"></span></button></td></tr>');
      //   <tr data-id="{mahalas.idmahalla}">
      //   <td class="text-center"><a id="name{mahalas.idmahalla}" href="#" data-type="text" data-pk="{mahalas.idmahalla}" class="editable editable-click"> {mahalas.mahallaName}</a></td>
      //   <td class="text-center"> <a id="name_en{mahalas.idmahalla}" href="#" data-type="text" data-pk="{mahalas.idmahalla}" class="editable editable-click"> {mahalas.mahallaName_en}</a></td>
      //   <td class="text-center">{mahalas.areaName}</td>
      //   <td class="text-center">{mahalas.areaName_en}</td>
      //   <td class="text-center">
      //     <button id="enable" value="{mahalas.idmahalla}" data-title="Edit" data-toggle="modal" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-pencil">  </span></button>
      //   </td>
      //   <td class="text-center">
      //     <button id="delete" value="{mahalas.idmahalla}" href="#del" data-toggle="modal" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span></button>
      //   </td>
      // </tr>

        $('#newMahala').modal('hide');
        $.notify({
          title: "<strong>Successful:</strong> ",
          message: "Add a new Mahala has successfully"
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