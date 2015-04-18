$(document).ready(function(){
  $("#formSchool").validate({
    ignore: ':not(select:hidden, input:visible, textarea:visible)',
    rules:{
      name:{
        required: true,
      },
      latit:{
        required: true,
      },
      city_idcity:{
        required: true,
      },
      name_en:{
        required: true,
      },
      longit:{
        required: true,
      },
      area_idarea:{
        required: true,
      },
      mahalla_idmahalla:{
        required: true,
      },
    },
    messages:{
      name:{
        required: "Please enter school in arabic !",
      },
      latit:{
        required: "Please enter latitudes number !",
      },
      city_idcity:{
        required: "Please select city name !",
      },
      name_en:{
        required: "Please enter school in english !",
      },
      longit:{
        required: "Please enter longitude number !",
      },
      area_idarea:{
        required: "Please select area name !",
      },
      mahalla_idmahalla:{
        required: "Please select mahalla name !",
      },
    },
    errorPlacement: function (error, element) {
      if ($(element).is('select')) {
          element.next().after(error);
      } else {
          error.insertAfter(element);
      }
    },
  });

  $('body').on('click', '#delete', function(){
    $('#deletee').val($(this).val());
  });
  $('body').on('click', '#deletee', function(){
    $.get('/deleteSchool/'+$(this).val(),function(result){
      window.location.href='/adminSchools';
    });
  });

  $('#city_idcity').on('change',function() {
    var id = $('#city_idcity').val();
    $.get('/getarea/'+id,function(result){
      $('#area').empty();
      $('#mahalla').empty();
      for ( var i = 0; i < result.length;  i++ ) {
        $('#area').append("<option value = '"+result[i].idarea+"'>"+result[i].name+"</option>");
      }
    });
  });

  $('#area').on('change',function() {
    var id = $('#area').val();
    $.get('/getmahalla/'+id,function(result){
      for ( var i = 0; i < result.length;  i++ ) {
        $('#mahalla').append("<option value = '"+result[i].idmahalla+"'>"+result[i].name+"</option>");
      }
    });
  });

  $('body').on('click', '#save', function () {
    $('#formSchool').submit();
  });

  $("#formSchool").submit(function() {
    $.post("/addschool", $("form").serializeObject(), function(data, error){
      if(data.stat !=true){
        // $("#err").empty();
        // for (err in data.result) {
        //   $("#err").append('<h1>'+data.result[err].msg+'</h1>');
        // }
      } 
      else {
        //'<tr data-id="'+data.result[0].idmahalla+'"><td class="text-center"><a id="name'+data.result[0].idmahalla+'" href="#" data-type="text" data-pk="'+data.result[0].idmahalla+'" class="editable editable-click editable-disabled" tabindex="-1">'+data.result[0].name+'</a></td><td class="text-center"><a id="name_en'+data.result[0].idmahalla+'" href="#" data-type="text" data-pk="'+data.result[0].idmahalla+'" class="editable editable-click editable-disabled" tabindex="-1">'+data.result[0].name_en+'</a></td><td class="text-center"><button id="enable" data-value="'+data.result[0].idmahalla+'" data-placement="top" title="" class="btn btn-info btn-xs" data-original-title="Edit City"><span class="glyphicon glyphicon-pencil"></span></button></td><td class="text-center"><button id="delete" href="#del" data-toggle="modal" data-value="'+data.result[0].idmahalla+'" data-placement="top" title="" class="btn btn-danger btn-xs" data-original-title="Delete City"><span class="glyphicon glyphicon-trash"></span></button></td></tr>'
        // $("#tbody").append('<tr data-id="'+data.result[0].idmahalla+'">'+
        // '<td class="text-center"><a id="name'+data.result[0].idmahalla+'" href="#" data-type="text" data-pk="'+data.result[0].idmahalla+'" class="editable editable-click editable-disabled">'+data.result[0].mahallaName+'</a></td>'+
        // '<td class="text-center"> <a id="name_en'+data.result[0].idmahalla+'" href="#" data-type="text" data-pk="'+data.result[0].idmahalla+'" class="editable editable-click editable-disabled">'+data.result[0].mahallaName_en+'</a></td>'+
        // '<td class="text-center">'+data.result[0].areaName+'</td>'+
        // '<td class="text-center">'+data.result[0].areaName_en+'</td>'+
        // '<td class="text-center">'+
        //   '<button id="enable" value="'+data.result[0].idmahalla+'" data-title="Edit" data-toggle="modal" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-pencil">  </span></button>'+
        // '</td><td class="text-center">'+
        //   '<button id="delete" value="'+data.result[0].idmahalla+'" href="#del" data-toggle="modal" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span></button>'+
        // '</td></tr>');

        $('#newschool').modal('hide');
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