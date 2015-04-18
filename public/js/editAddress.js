$(document).ready(function(){
  var defaults = {
        disabled: true,
  };

  $.extend($.fn.editable.defaults, defaults);
  $('body').on('click','#enable', function(){
    id=$(this).parent().parent().data('id');
    $('#description'+id).editable('toggleDisabled');
    $('#school'+id).editable('toggleDisabled');
    $('#branch'+id).editable('toggleDisabled');
    $('#latit'+id).editable('toggleDisabled');
    $('#longit'+id).editable('toggleDisabled');

  });

  $('a[id^="longit"]').editable({
    url: '/editCompanyLongit',
    type: 'text',
    pk: 1,
    name: 'longit',
    title: 'Edit longit !',
    validate: function(v) {
      if(!v) return 'Please enter your longit';
    }
  });

  $('a[id^="latit"]').editable({
    url: '/editCompanyLatit',
    type: 'text',
    pk: 1,
    name: 'latit',
    title: 'Edit latit !',
    validate: function(v) {
      if(!v) return 'Please enter your latit';
    }
  });


  $('a[id^="school"]').editable({
    url: '/',
    type: 'select',
    source: '/',
    pk: 1,
    name: 'school',
    title: 'Edit school !',
    validate: function(v) {
      if(!v) return 'Please enter your school';
    }
  });

  $('a[id^="description"]').editable({
    url: '/editCompanyDesc',
    type: 'textarea',
    pk: 1,
    name: 'description',
    title: 'Edit description !',
    validate: function(v) {
      if(!v) return 'Please enter your description';
    }
  });
});