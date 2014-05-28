$(document).ready(function() {

	var container = $("#container");
	var ret = '';

	$.getJSON('./getJson.php', function(json) {

	  	$.each(json, function(key, value) {
	  		console.log(value);
	  		ret += '<p>';
	  		ret += 'ID: <span>'+value.ID+'</span> - ';
	  		ret += 'Product: <span>'+value.product+'</span> - ';
	  		ret += 'Value: <span>'+value.value+'</span>';
	  		ret += '</p>';
	  	});

	  	container.html(ret);
	  	
	});

});