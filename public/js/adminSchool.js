$(document).ready(function(){
  $("#formSchool").validate({
    ignore: ':not(select:hidden, input:visible, textarea:visible)',
    rules:{
      name:{
        required: true,
      },
      latitudes:{
        required: true,
      },
      city:{
        required: true,
      },
      name_en:{
        required: true,
      },
      longitude:{
        required: true,
      },
      area:{
        required: true,
      },
      mahalla:{
        required: true,
      },
    },
    messages:{
      name:{
        required: "Please enter school in arabic !",
      },
      latitudes:{
        required: "Please enter latitudes number !",
      },
      city:{
        required: "Please select city name !",
      },
      name_en:{
        required: "Please enter school in english !",
      },
      longitude:{
        required: "Please enter longitude number !",
      },
      area:{
        required: "Please select area name !",
      },
      mahalla:{
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
});