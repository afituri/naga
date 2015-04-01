$(document).ready(function(){
  $('body').on('click', '#sub', function () {
    $('#formCitie').submit();
  });
  $('body').on('submit', '#formCitie', function(data) {
    $.post("/addcity", $("form").serializeObject(), function(data, textStatus, jqXHR){
      if(data !=true){
        for (err in data) {
          $("#err").append('<h1>'+data[err].msg+'</h1>');
        }
      alert(data);

      }else{
        window.location.href="/adminCities";

      }
    });
  });


});