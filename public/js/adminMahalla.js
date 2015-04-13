$(document).ready(function(){
  $("#formMahala").validate({
    ignore: ':not(select:hidden, input:visible, textarea:visible)',
    rules:{
      name:{
        required: true,
      },
      name_en:{
        required: true,
      },
      city_idcity:{
        required: true,
      },
      city_idarea:{
        required: true,
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
        required: "Please select city name !",
      },
      city_idarea:{
        required: "Please select area name !",
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
  
  $('body').on('click', '#cancel', function () {
    $('#name').val("");
    $('#name_en').val("");
    $('.selectpicker').selectpicker('val', '');
  });

  $('body').on('click','#delete', function(){
    $('#deletee').val($(this).val());
  });

  $('body').on('click','#deletee', function(){
   $.get('/deleteMahalla/'+$(this).val(),function(result){
     window.location.href='/adminMahala';
   });
  });
});