function scrollAndStop(section){
	$('html,body').stop().animate({scrollTop : offset},400);
}

$(document).ready(function(){
	$('.mbNavicon').click(function(){
		$('.mbLinks').slideToggle();
	});
});