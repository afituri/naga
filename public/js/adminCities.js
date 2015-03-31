$(document).ready(function(){
  
  $('body').on('submit', '#formCitie', function(data) {
    $.post("/addcity", $("form").serializeObject(), function(data, textStatus, jqXHR){
      alert(data);
      if(data !=true){
        for (err in data) {
          $("#err").append('<h1>'+data[err].msg+'</h1>');
        }
      }else{
        window.location.href="/adminCities"+id;

      }
    });
  });


});