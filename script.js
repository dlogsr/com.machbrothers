
$menuBar = $('.menuBar');
$mbLinks = $('.mbLinks');
$mbLogo = $('.mbLogo');
$mbTranslucent = $('.mbTranslucent');
$mbNavicon = $('.mbNavicon');
$mbHeader = $('.mbHeader');
$pageContent = $('.pageContent');

var clickedLink;

function scrollAndStop(marker){
	var scrollOffset;
	console.log(marker);
	scrollOffset = $(marker).offset().top - $mbHeader.height();
	$('html,body').stop().animate({scrollTop : scrollOffset},400);
}

$(document).ready(function(){
	$mbNavicon.click(function(){
		$mbLinks.slideToggle();
	});

	$mbLogo.click(function(e){
		e.preventDefault();
		if(!window.matchMedia("(min-width: 680px)").matches)	$mbLinks.slideToggle();
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

isFullScreen = window.matchMedia("(min-width: 900px)").matches;

$pageContent.waypoint(function(direction){
	if(window.matchMedia("(min-width:680px)").matches)
	{
		if(direction == 'down'){
			$menuBar.addClass('mbTranslucent');
		}
		else{
			$menuBar.add($mbLinks).add($mbLogo).removeClass('mbTranslucent');
		}
	}

},{
	offset:55
});

// $pageContent.waypoint(function(direction){
// 	if(window.matchMedia("(min-width:680px)").matches)
// 	{
// 		if(direction == 'up'){
// 			$menuBar.add($mbLinks).add($mbLogo).removeClass('mbTranslucent');
// 		}
// 	}
// },{
// 	offset:55
// });