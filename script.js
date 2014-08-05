
$menuBar = $('.menuBar');
$mbLinks = $('.mbLinks');
$mbLogo = $('.mbLogo');
$mbTranslucent = $('.mbTranslucent');
$mbNavicon = $('.mbNavicon');
$mbHeader = $('.mbHeader');
$pageContent = $('.pageContent');
$pageSplashButton = $('.pageSplashButton');
$pageSplashMonkeys = $('.pageSplashMonkeys');
$pageSplashGameLogo = $('.pageSplashGameLogo');

var clickedLink;

//device detection for disabling parallax (quick and dirty solution)
var isMobile = {
    Android: function() { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function scrollAndStop(marker){
	var scrollOffset;
	console.log(marker);
	scrollOffset = $(marker).offset().top - $mbHeader.height();
	$('html,body').stop().animate({scrollTop : scrollOffset},400);
}

function adjustContentSpacing(currSection) {
	var windowHeight = $(window).height();
	matchMedia("(min-width: 680px)").matches ? windowHeight -= 65 : windowHeight -= 45;
	$(currSection).css({'min-height':windowHeight});
};


$(document).ready(function(){
	adjustContentSpacing('.psPrimary');
	adjustContentSpacing('article');
	$mbNavicon.click(function(){
		$mbLinks.slideToggle();
	});

	$mbLogo.click(function(e){
		e.preventDefault();
		var currentPage = (location.pathname.split('/').slice(-1)[0]);
		console.log(currentPage);
		if(currentPage == "index.html" || currentPage == ""){
			if(!window.matchMedia("(min-width: 680px)").matches)	$mbLinks.slideUp();
				scrollAndStop('body');	
		}
		else{
			window.location = "index.html";
		}
		
	});

	// ******* REMOVED ELEMENT FROM HTML
	// $pageSplashButton.click(function(e){
	// 	e.preventDefault();
	// 	clickedLink = '.signUpCard';
	// 	console.log(clickedLink);
	// 	scrollAndStop(clickedLink);
	// })

	// FUNCTION DISABLED - not in use for multi-page layout 7/12/14
	// $('.mbLinkButton').click(function(e){
	// 	e.preventDefault();
	// 	if(!window.matchMedia("(min-width: 680px)").matches)	$('.mbLinks').slideToggle();
	// 	clickedLink = $(this).attr('id');
	// 	clickedLink = '.' + clickedLink + 'Card';
	// 	scrollAndStop(clickedLink);
	// })
	if( !isMobile.any()){
		if(window.matchMedia("(min-width: 680px)").matches) $(window).stellar();
	}
});

$(window).resize(function(){
	adjustContentSpacing('.psPrimary');
	adjustContentSpacing('article');
	if(window.matchMedia("(min-width: 680px)").matches) $(window).stellar();
});

$pageSplashGameLogo.waypoint(function(direction){
	if(window.matchMedia("(min-width:680px)").matches)
	{
		if(direction == 'down'){
			$menuBar.removeClass('mbTranslucent');
			// $pageSplashMonkeys.hide();
		}
		else{
			$menuBar.add($mbLinks).add($mbLogo).addClass('mbTranslucent');
			// $pageSplashMonkeys.show();
		}
	}

},{
	offset:-200
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