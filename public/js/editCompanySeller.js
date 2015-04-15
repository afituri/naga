$(document).ready(function(){
  var defaults = {
        disabled: true,
  };

  $.extend($.fn.editable.defaults, defaults);
  $('body').on('click','#enable', function(){
    id=$(this).parent().parent().data('id');
    $('#first_name'+id).editable('toggleDisabled');
    $('#last_name'+id).editable('toggleDisabled');
    $('#email'+id).editable('toggleDisabled');
    $('#password'+id).editable('toggleDisabled');
    $('#level'+id).editable('toggleDisabled');

  });

  $('a[id^="level"]').editable({
    url: '/',
    type: 'select',
    source: '/',
    pk: 1,
    name: 'level',
    title: 'Edit level !',
    validate: function(v) {
      if(!v) return 'Please enter your level';
    }
  });

  $('a[id^="password"]').editable({
    url: '/',
    type: 'text',
    pk: 1,
    name: 'password',
    title: 'Edit password !',
    validate: function(v) {
      if(!v) return 'Please enter your password';
    }
  });

  $('a[id^="email"]').editable({
    url: '/',
    type: 'text',
    pk: 1,
    name: 'email',
    title: 'Edit email !',
    validate: function(v) {
      if(!v) return 'Please enter your email';
    }
  });
  $('a[id^="last_name"]').editable({
    url: '/',
    type: 'text',
    pk: 1,
    name: 'last_name',
    title: 'Edit school !',
    validate: function(v) {
      if(!v) return 'Please enter your last name';
    }
  });

  $('a[id^="first_name"]').editable({
    url: '/',
    type: 'text',
    pk: 1,
    name: 'first_name',
    title: 'Edit first_name !',
    validate: function(v) {
      if(!v) return 'Please enter your first name';
    }
  });
});