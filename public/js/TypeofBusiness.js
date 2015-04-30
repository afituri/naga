$(document).ready(function(){
  $('body').on('click', '#view', function () {
    window.location.href='/adminTypeBusiness/'+$(this).val()+'/adminGenre';
  });

  $('body').on('click','#delete',function () {
    $('#deletee').val($(this).val());
  });
  
  $('body').on('click','#deletee',function () {
    $.get('/deleteTOB/'+$(this).val(),function(result){
      window.location.href='/adminTypeBusiness';
    })
  });

  $('body').on('click', '#save', function () {
    $('#formtob').submit();
  });

  $("#formtob").submit(function() {
    $.post("/addTob", $("form").serializeObject(), function(data, error){
      if(data.stat !=true){
        $('#newtob').modal('hide');
        var e ="";
        for (err in data.result) {
          e+=data.result[err].msg+'</br>';
        }
        $.notify({
          title: "<strong>error:</strong> ",
          message: e
        },{
          type: 'danger',
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
      else {
        if($("#TOB").children().length>=10){
          $("#TOB tr:last-child").remove();
        $("#TOB").append('<tr data-id="'+data.result[0].idtob+'">'+
          '<td> <a id="name'+data.result[0].idtob+'" href="#" data-type="text" data-pk="'+data.result[0].idtob+'" class="editable editable-click editable-disabled">'+data.result[0].name+'</a></td>'+
          '<td> <a id="name_en'+data.result[0].idtob+'" href="#" data-type="text" data-pk="'+data.result[0].idtob+'" class="editable editable-click editable-disabled">'+data.result[0].name_en+'</a></td>'+
          '<td class="text-right"><button id="view" value="'+data.result[0].idtob+'" data-title="Edit" data-toggle="modal" class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-eye-open"></span></button>'+
          '</td><td class="text-right">'+
            '<button id="enable" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-pencil"></span></button>'+
          '</td><td class="text-right">'+
            '<button id="delete" value="'+data.result[0].idtob+'" href="#del" data-toggle="modal" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span></button>'+
          '</td></tr>');
        $('#newtob').modal('hide');
        $.notify({
          title: "<strong>Successful:</strong> ",
          message: "Add a new Type Business has successfully"
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