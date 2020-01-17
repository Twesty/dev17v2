$(function() {

	// Service add switcher

	let switches = $('.service .onoffswitch__label');
	
	switches.on('click', function(){

		$( this ).children('.onoffswitch__switch').toggleClass('switch-active');
		$('.onoffswitch__inner').toggleClass('inner-active');
		
	})

	$(document).ready(function() {
		for (var q = 0; q < 19; q++) {
		  $('.cover__wrap').append('<div class="cover__dot dot d'+(q+1)+'"></div>');
		}
	  });

});
