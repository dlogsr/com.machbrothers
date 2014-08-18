
$menuBar = $('.menuBar');
$mbLinks = $('.mbLinks');
$mbLogo = $('.mbLogo');
$mbTranslucent = $('.mbTranslucent');
$mbNavicon = $('.mbNavicon');
$mbHeader = $('.mbHeader');
$mbLinkButton = $('.mbLinkButton');
$mbContactLink = $('#contact');
$menuBarTrigger = $('.menuBarTrigger');
$menuColorTrigger = $('.menuColorTrigger');
$pageContent = $('.pageContent');
$pageSplashButton = $('.pageSplashButton');
$pageSplashMonkeys = $('.pageSplashMonkeys');
$pageSplashDragon = $('.pageSplashDragon');
$pageSplashGameLogo = $('.pageSplashGameLogo');
$contactCard = $('.contactCard');

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

function scrollAndStop(marker,offset){
	var scrollOffset;
	console.log(marker);
	scrollOffset = $(marker).offset().top - offset;
	$('html,body').stop().animate({scrollTop : scrollOffset},400);
}

function adjustContentSpacing(currSection,offset) {
	var windowHeight = $(window).height();
	matchMedia("(min-width: 680px)").matches ? windowHeight -= 65 : windowHeight -= 45;
	$(currSection).css({'min-height':windowHeight-offset});
};


$(document).ready(function(){
	console.log(document.orientation);
	//page setup functions
	adjustContentSpacing('.psPrimary',0);
	adjustContentSpacing('article',150);
	if(!window.matchMedia("(min-width: 680px)").matches) $menuBar.add($mbLinkButton).removeClass('mbTranslucent');
	if( !isMobile.any()){
		if(window.matchMedia("(min-width: 680px)").matches) $(window).stellar();
	}
	else if (!isMobile.any()){
		if(window.matchMedia("(min-width: 680px)").matches) $pageSplashDragon.stellar({
			scrollProperty: 'transform'
		});
	}

	//page interaction functions
	$mbNavicon.click(function(){
		$mbLinks.slideToggle();
	});

	$mbLogo.click(function(e){
		e.preventDefault();
		if(document.body.scrollTop < 10){
			console.log('top');
			var currentPage = (location.pathname.split('/').slice(-1)[0]);
			console.log(currentPage);
			if(!(currentPage == "index.html" || currentPage == "")){
				window.location = "index.html";
			}
		}
		else{
			if(!window.matchMedia("(min-width: 680px)").matches)	$mbLinks.slideUp();
				scrollAndStop('body',$mbHeader.height());	
		}		
	});

	$mbContactLink.click(function(e){
		e.preventDefault();
		var offset;
		if(!window.matchMedia("(min-width: 680px)").matches){
			offset = 42;
			$mbLinks.slideUp();
		}
		else offset = 75;
		scrollAndStop($contactCard,offset);
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

});


$(window).resize(function(){
	if(window.matchMedia("(min-width: 680px)").matches){
		adjustContentSpacing('.psPrimary',0);
		adjustContentSpacing('article',150);
		$(window).stellar();
	} 
});

$(window).on("orientationchange",function(){
	adjustContentSpacing('.psPrimary',0);
	adjustContentSpacing('article',150);
});

function swapMenuTranslucent(direction){
	if(window.matchMedia("(min-width:680px)").matches)
	{
		if(direction == 'down'){
			$menuBar.add($mbLinks).add($mbLogo).add($mbLinkButton).removeClass('mbTranslucent');
			// $pageSplashMonkeys.hide();
		}
		else{
			$menuBar.add($mbLinks).add($mbLogo).add($mbLinkButton).addClass('mbTranslucent');
			// $pageSplashMonkeys.show();
		}
	}
}

$menuBarTrigger.waypoint(function(direction){
	swapMenuTranslucent(direction);
},{
	offset:-1
});

$menuColorTrigger.waypoint(function(direction){

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