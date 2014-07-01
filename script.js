$(document).ready(function(){
	$('.mbNavicon').click(function(){
		$('.mbLinks').slideToggle();
	});

	if(window.matchMedia("(min-width: 680px)").matches) $(window).stellar();
});