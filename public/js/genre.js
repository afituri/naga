$(document).ready(function(){
   $('body').on('click','#delete',function(){
    $('#deletee').val($(this).val());

   }) ;




    $('body').on('click','#deletee',function(){
        $.get('/deletegenreee/'+$(this).val(),function(result){
            window.location.href='/adminTypeBusiness/'+result[0].tob_idtob+'/adminGenre';
        });
    }) ;



  $('body').on('click', '#view', function () {
    window.location.href='/adminTypeBusiness/adminGenre/'+$(this).val()+'/adminTypeGenre';
  });
});