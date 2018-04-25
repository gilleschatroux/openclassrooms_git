"use strict";

// Une fois le DOM chargé
$(function() {
	$('#test').on('click', function() {
		$('.hello').slideToggle(1000);
	});
});