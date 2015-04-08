$(document).ready(function(){
  var defaults = {
        disabled: true,
  };

  $.extend($.fn.editable.defaults, defaults);
  $('body').on('click','#enable', function(){
    id=$(this).parent().parent().data('id');
    $('#name'+id).editable('toggleDisabled');
    $('#name_en'+id).editable('toggleDisabled');
  }); 




     $('a[id^="name_en"]').editable({
    url: '/editAreaNameEn',
    type: 'text',
    pk: 1,
    name: 'name_en',
    title: 'Edit city name in English !',
    validate: function(v) {
      if(!v) return 'Please enter your school name in English';
    }
  });


   $('a[id^="name"]').editable({
    url: '/editAreaName',
    type: 'text',
    pk: 1,
    name: 'name_en',
    title: 'Edit city name in English !',
    validate: function(v) {
      if(!v) return 'Please enter your school name in English';
    }
  });


      $('a[id^="name"]').editable({
    url: '/editAreaName',
    type: 'select',
    pk: 1,
    name: 'name_en',
    title: 'Edit city name in English !',
    validate: function(v) {
      if(!v) return 'Please enter your school name in English';
    }
  });

  



  });