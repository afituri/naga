$(document).ready(function() {

  var panels = $('.user-infos');
  var panelsButton = $('.dropdown-user');
  panels.hide();
  //Click dropdown
  panelsButton.click(function() {
    //get data-for attribute
    var dataFor = $(this).attr('data-for');
    var idFor = $(dataFor);
    //current button
    var currentButton = $(this);
    idFor.slideToggle(400, function() {
      //Completed slidetoggle
      if(idFor.is(':visible'))
      {
        currentButton.html('<i class="glyphicon glyphicon-chevron-up text-muted"></i>');
      }
      else
      {
        currentButton.html('<i class="glyphicon glyphicon-chevron-down text-muted"></i>');
      }
    })
  });

  $('[data-toggle="tooltip"]').tooltip();

  $('button').click(function(e) {
      e.preventDefault();
      alert("This is a demo.\n :-)");
  });

  $('body').append('<div id="toTop" class="btn btn-info"><span class="glyphicon glyphicon-chevron-up"></span> Back to Top</div>');
    $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  }); 
    
  $('#toTop').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });
});