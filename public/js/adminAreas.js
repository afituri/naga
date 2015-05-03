$(document).ready(function(){

  $("#formArea").validate({
    ignore: ':not(select:hidden, input:visible, textarea:visible)',
    rules:{
      name:{
        required: true,
      },
      name_en:{
        required : true,
      },
      city_idcity:{
        required : true,
      },
    },
    messages:{
      name:{
        required: "Please enter area in arabic !",
      },
      name_en:{
        required: "Please enter area in english !",
      },
      city_idcity:{
        required: "Please select city name !"
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
  $('body').on('click', '#save', function (e) {
    e.preventDefault();
    $('#formArea').submit();
  });
  $('body').on('click', '#cancel', function () {
    $('#name').val("");
    $('#name_en').val("");
    $('.selectpicker').selectpicker('val', '');
  });
  $("#formArea").submit(function(e) {
    var isvalidate=$("#formArea").valid();
    if(isvalidate){
      $.post("/addAreas", $("form").serializeObject(), function(data, error){
        if(data.stat !=true){
          // $("#err").empty();
          // for (err in data.result) {
          //   $("#err").append('<h1>'+data.result[err].msg+'</h1>');
          // }
        }else{
          $('#name').val("");
          $('#name_en').val("");
          $('.selectpicker').selectpicker('val', '');
          if($("#tbody").children().length>=10){
            $("#tbody tr:last-child").remove();
          }
          $("#tbody").prepend('<tr data-id="'+data.result[0].idarea+'">'+
            '<td class="text-center"> <a id="name'+data.result[0].idarea+'" href="#" data-type="text" data-pk="'+data.result[0].idarea+'" class="editable editable-click editable-disabled">'+data.result[0].areaName+'</a></td>'+
            '<td class="text-center"> <a id="name_en'+data.result[0].idarea+'" href="#" data-type="text" data-pk="'+data.result[0].idarea+'" class="editable editable-click editable-disabled">'+data.result[0].areaName_en+'</a></td>'+
            '<td class="text-center">'+data.result[0].cityName+'</td>'+
            '<td class="text-center">'+data.result[0].cityName_en+'</td>'+
            '<td class="text-center">'+
            '<button id="enable" data-value="'+data.result[0].idarea+'" data-placement="top" title="Edit City" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-pencil"></span></button></td><td class="text-center">'+
            '<button id="delete" href="#del" data-toggle="modal" data-placement="top" title="Delete" value="'+data.result[0].idarea+'" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash">  </span></button></td></tr>');
          $('#newArea').modal('hide');
          $.notify({
            title: "<strong>Successful:</strong> ",
            message: "Add a new Area has successfully"
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
    }
    return false;
  });
//-add your new fanction

  $('body').on('click','#delete',function(){
      $('#deletee').val($(this).val());
   }) ;

  $('body').on('click','#deletee',function(){
      $.get('/deleteArea/'+$(this).val(),function(result){
          window.location.href='/adminAreas';
      });
  }) ;



});



  
