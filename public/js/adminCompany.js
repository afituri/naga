$(document).ready(function(){
  $("#formCompany").validate({
      //ignore: ':not(select:visible, input:visible, textarea:visible)',
      rules:{
        name:{
          required: true
        },
        tob_idtob:{
          required: true
        },
        logo:{
          required: true
        },
        name_en:{
          required: true
        },
        level:{
          required: true
        }
      },
      messages:{
        name:{
          required: "Please enter name Company in arabic !"
        },
        tob_idtob:{
          required: "Please enter Type Bis !"
        },
        logo:{
          required: "Please choice logo !"
        },
        name_en:{
          required: "Please enter name Company in english!"
        },
        level:{
          required: "Please select level !"
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

  $('body').on('click','#delete', function(){
    $('#deletee').val($(this).val());
  });

  $('body').on('click','#deletee', function(){
    $.get('/deleteCompany/'+$(this).val(),function(result){
      window.location.href='/adminCompany';
    });
  });

  $('body').on('click', '#View', function () {
  	//alert($(this).val());
    window.location.href='/adminCompany/'+$(this).val()+'/adminCompanyView';
  });

    $('body').on('click', '#Addresses', function () {
    window.location.href='/adminCompany/'+$(this).val()+'/adminCompanyAddress';
  });

     $('body').on('click', '#seller', function () {
      window.location.href='/adminCompany/'+$(this).val()+'/adminSellerCo';
  });

  $('body').on('click', '#save', function () {
    $('#formCompany').submit();
  });



});