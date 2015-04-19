$(document).ready(function(){
  $("#formAddres").validate({
        //ignore: ':not(select:visible, input:visible, textarea:visible)',
        rules:{
          latit:{
            required: true
          },
          Branch:{
            required: true
          },
          Description:{
            required: true
          },
          longit:{
            required: true
          },
          School:{
            required: true
          }
        },
        messages:{
          latit:{
            required: "Please enter latit !"
          },
          Branch:{
            required: "Please select Branch !"
          },
          Description:{
            required: "Please enter Description !"
          },
          longit:{
            required: "Please enter longit !"
          },
          School:{
            required: "Please select School !"
          }
        }
        // errorPlacement: function (error, element) {
        //   if ($(element).is('select')) {
        //       element.next().after(error);
        //   } else {
        //       error.insertAfter(element);
        //   }
        // },
  });

  $('body').on('click', '#view', function () {
    window.location.href='/adminCompany/adminCompanyAddress';
   // alert("moahhed");
    });
  
  $('body').on('click', '#save', function () {
    $('#formAddres').submit();
    });
  });