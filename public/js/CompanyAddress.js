$(document).ready(function(){
  $("#formAddres").validate({
        //ignore: ':not(select:visible, input:visible, textarea:visible)',
        rules:{
          latit:{
            required: true
          },
          default:{
            required: true
          },
          address_desc:{
            required: true,
          },
          longit:{
            required: true
          },
          school_idschool:{
            required: true
          }
        },
        messages:{
          latit:{
            required: "Please enter latit !"
          },
          default:{
            required: "Please select Branch !"
          },
          address_desc:{
            required: "Please enter Description !"
          },
          longit:{
            required: "Please enter longit !"
          },
          school_idschool:{
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

$('body').on('click', '#delete', function () {
     $('#deletee').val($(this).val());
  });

$('body').on('click', '#deletee', function () {
     $.get('/deleteCompanySeller/'+$(this).val(),function(result){
      window.location.href='/adminCompany/'+result[0].idcompany+'/adminSellerCo';
    });
  });

  $('body').on('click', '#view', function () {
    window.location.href='/adminCompany/adminCompanyAddress';
    });
  
  $('body').on('click', '#save', function () {
    $('#formAddres').submit();
    });
  });