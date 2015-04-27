$(document).ready(function(){
  $("#formAddres").validate({
    rules:{
      latit:{
        required: true
      },
      default:{
        required: true
      },
      Area:{
        required: true
      },
      school_idschool:{
        required: true
      },
      address_desc:{
        required: true
      },
      longit:{
        required: true
      },
      City:{
        required: true
      },
      Mahala:{
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
      Area:{
        required: "Please select Area !"
      },
      school_idschool:{
        required: "Please select School !"
      },
      address_desc:{
        required: "Please enter Description !"
      },
      longit:{
        required: "Please enter longit !"
      },
      City:{
        required: "Please select City !"
      },
      Mahala:{
        required: "Please select Mahala !"
      }
    }
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