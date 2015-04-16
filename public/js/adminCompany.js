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




});