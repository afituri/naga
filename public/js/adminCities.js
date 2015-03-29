$(document).ready(function(){

	$('body').on('submit', '#form', function(data) {

		$.post("/addcity", $("form").serializeObject(), function(data, textStatus, jqXHR){
			alert(data);
		});
	});


});