$(document).ready(function(){
  var defaults = {
        disabled: true,
  };

  $.resul=new Array();

  $.extend($.fn.editable.defaults, defaults);

  $('#enable').click(function() {
    $('.panel-body .editable').editable('toggleDisabled');
  }); 
  
  $('#nameArabic').editable({
    url: '',
    type: 'text',
    pk: 1,
    name: 'name',
    title: 'Edit school name in Arabic !',
    validate: function(v) {
      if(!v) return 'Please enter your school name in Arabic';
    }
  });

  $('#nameEnglish').editable({
  url: '',
  type: 'text',
  pk: 1,
  name: 'name',
  title: 'Edit school name in English !',
  validate: function(v) {
    if(!v) return 'Please enter your school name in English';
  }
  });

  $('#city').editable({
    url: '',
    type: 'text',
    pk: 1,
    name: 'name',
    title: 'Edit city name !',
    validate: function(v) {
      if(!v) return 'Please enter your city name';
    }
  });

  $('#area').editable({
    url: '',
    type: 'text',
    pk: 1,
    name: 'name',
    title: 'Edit area name !',
    validate: function(v) {
      if(!v) return 'Please enter your area name';
    }
  });

  $('#mahalla').editable({
    url: '',
    type: 'text',
    pk: 1,
    name: 'name',
    title: 'Edit mahalla name !',
    validate: function(v) {
      if(!v) return 'Please enter your mahalla name';
    }
  });

  $('#latitude').editable({
    url: '',
    type: 'text',
    pk: 1,
    name: 'name',
    title: 'Edit latitudes number !',
    validate: function(v) {
      if(!v) return 'Please enter your latitudes number';
    }
  });

  $('#longitude').editable({
    url: '',
    type: 'text',
    pk: 1,
    name: 'name',
    title: 'Edit longitude number !',
    validate: function(v) {
      if(!v) return 'Please enter your longitude number';
    }
  });
});