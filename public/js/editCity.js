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
  

  $.fn.name_en = function(){
    $('a[id^="name_en"]').editable({
      url: '/editnameEn',
      type: 'text',
      pk: 1,
      name: 'name_en',
      title: 'Edit city name in English !',
      validate: function(v) {
        if(!v) return 'Please enter your school name in English';
      }
    });
  };
  $.fn.name_en();
  $.fn.name = function(){
    $('a[id^="name"]').editable({
      url: '/editname',
      type: 'text',
      pk: 1,
      name: 'name',
      title: 'Edit city name in Arabic !',
      validate: function(v) {
        if(!v) return 'Please enter your school name in Arabic';
      }
    });
  };
  $.fn.name();
});