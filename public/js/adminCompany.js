$(document).ready(function(){

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
      alert("working on it");
   // window.location.href='/adminCompany/'+$(this).val()+'/adminCompanyAddress';
  });

   




});