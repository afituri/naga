$(document).ready(function(){
 $("#idUserName").hide();
 $('body').on('click','#idEditUserName', function(){
   $("#idUserName").show(300);
   $("#idPhoneNumber").hide(300);
   $("#idPassword").hide(300);
   $("#idEmail").hide(300);
   
 });
 $('body').on('click','#idCancelUserName', function(){
   $("#idUserName").hide(300);
 });
 /////////
 $("#idPassword").hide();
 $('body').on('click','#idEditPassword', function(){
   $("#idPassword").show(300);
   $("#idUserName").hide(300);
   $("#idPhoneNumber").hide(300);
   $("#idEmail").hide(300);
   
 });
 $('body').on('click','#idCancelPassword', function(){
   $("#idPassword").hide(300);
 });
 ///////////////
 $("#idEmail").hide();
 $('body').on('click','#idEditEmail', function(){
   $("#idEmail").show(300);
   $("#idPassword").hide(300);
   $("#idUserName").hide(300);
   $("#idPhoneNumber").hide(300);
   
 });
 $('body').on('click','#idCancelEmail', function(){
   $("#idEmail").hide(300);
 });
 ////////////////
  $("#idPhoneNumber").hide();
 $('body').on('click','#idEditPhoneNumber', function(){
   $("#idPhoneNumber").show(300);
   $("#idEmail").hide(300);
   $("#idPassword").hide(300);
   $("#idUserName").hide(300);
   
 });
 $('body').on('click','#idCancelPhoneNumber', function(){
   $("#idPhoneNumber").hide(300);
 });

});