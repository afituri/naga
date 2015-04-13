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
    url: '/editMahallaEn',
    type: 'text',
    pk: 1,
    name: 'name',
    title: 'Edit Mahalla name in English !',
    validate: function(v) {
      if(!v) return 'Please enter your Mahalla name in english';
    }
  }); 

  
  $('a[id^="name"]').editable({
    url: '/editMahalla',
    type: 'text',
    pk: 1,
    name: 'name',
    title: 'Edit Mahalla name in Arabic !',
    validate: function(v) {
      if(!v) return 'Please enter your Mahalla name in Arabic';
    }
  });



});