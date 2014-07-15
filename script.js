function scrollAndStop(marker){
	var scrollOffset;
	console.log(marker);
	scrollOffset = $(marker).offset().top - $('.mbHeader').height();
	$('html,body').stop().animate({scrollTop : scrollOffset},400);
}

var clickedLink;

$(document).ready(function(){
	$('.mbNavicon').click(function(){
		$('.mbLinks').slideToggle();
	});

	$('.mbLogo').click(function(e){
		e.preventDefault();
		if(!window.matchMedia("(min-width: 680px)").matches)	$('.mbLinks').slideToggle();
		scrollAndStop('body');
	});

	// FUNCITON DISABLED - not in use for multi-page layout 7/12/14
	// $('.mbLinkButton').click(function(e){
	// 	e.preventDefault();
	// 	if(!window.matchMedia("(min-width: 680px)").matches)	$('.mbLinks').slideToggle();
	// 	clickedLink = $(this).attr('id');
	// 	clickedLink = '.' + clickedLink + 'Card';
	// 	scrollAndStop(clickedLink);
	// })

	if(window.matchMedia("(min-width: 680px)").matches) $(window).stellar();
});