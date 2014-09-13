
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
$pictureSlider = $('.pictureSlider');
$stellarHoriz = $('.stellarHoriz');

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
	matchMedia("(min-width: 768px)").matches ? windowHeight -= 65 : windowHeight -= 45;
	$(currSection).css({'min-height':windowHeight-offset});
};


$(document).ready(function(){
	console.log(!isMobile.any());
	console.log(document.orientation);
	//page setup functions
	var currentPage = (location.pathname.split('/').slice(-1)[0]);
	adjustContentSpacing('.psPrimary',0);
	adjustContentSpacing('article',0);
	// if(!window.matchMedia("(min-width: 768px)").matches) $menuBar.add($mbLinkButton).removeClass('mbTranslucent');
	if( !isMobile.any() && (currentPage == 'index.html' || currentPage == '')){
		if(window.matchMedia("(min-width: 768px)").matches) {
			$(window).stellar({
				horizontalScrolling: false
			});
			$('#debug').html('test');
		};
		// if(window.matchMedia("(min-width: 768px)").matches) $pageSplashDragon.stellar({
		// 	scrollProperty: 'transform'
		// });
	};

	//page interaction functions
	$mbNavicon.click(function(){
		$mbLinks.slideToggle();
	});

	$mbLogo.click(function(e){
		e.preventDefault();
		if(document.body.scrollTop < 10){
			console.log('top');
			console.log(currentPage);
			if(!(currentPage == "index.html" || currentPage == "")){
				window.location = "index.html";
			}
		}
		else{
			if(!window.matchMedia("(min-width: 768px)").matches)	$mbLinks.slideUp();
				scrollAndStop('body',$mbHeader.height());	
		}		
	});

	$mbContactLink.click(function(e){
		e.preventDefault();
		var offset;
		if(!window.matchMedia("(min-width: 768px)").matches){
			offset = 42;
			$mbLinks.slideUp();
		}
		else offset = 75;
		scrollAndStop($contactCard,offset);
	});

	if(currentPage == "game.html"){
		console.log('games');
		$pictureSlider.slidesjs({
			width:720,
			height:480,
		    navigation: {
		      active: false,
		        // [boolean] Generates next and previous buttons.
		        // You can set to false and use your own buttons.
		        // User defined buttons must have the following:
		        // previous button: class="slidesjs-previous slidesjs-navigation"
		        // next button: class="slidesjs-next slidesjs-navigation"
		      effect: "slide"
		        // [string] Can be either "slide" or "fade".
		    },
		    pagination: {
		    	active: false,
		    	effect: "slide"
		    }
		});
	};

});

var resizeTimer;
$(window).resize(function(){	
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function(){
		if(window.matchMedia("(min-width: 768px)").matches){
			adjustContentSpacing('.psPrimary',0);
			adjustContentSpacing('article',0);
			// $(window).stellar();
		} 
		else if(window.matchMedia("(max-width: 768px)").matches){
			//there is a way to iterate this instead. disbale stellar when going form desktop to mobile
			document.getElementById('stellarDragon').removeAttribute('data-stellar-ratio').removeAttribute('style');
			document.getElementById('stellarBG').removeAttribute('data-stellar-ratio').removeAttribute('style');
			document.getElementById('stellarGround').removeAttribute('data-stellar-ratio').removeAttribute('style');
		}
	})
});

$(window).on("orientationchange",function(){
	adjustContentSpacing('.psPrimary',0);
	adjustContentSpacing('article',0);
});

function swapMenuTranslucent(direction){
	if(window.matchMedia("(min-width:768px)").matches)
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

// $menuBarTrigger.waypoint(function(direction){
// 	swapMenuTranslucent(direction);
// },{
// 	offset:-1
// });

// $menuColorTrigger.waypoint(function(direction){

// },{
// 	offset:-200
// });




// $pageContent.waypoint(function(direction){
// 	if(window.matchMedia("(min-width:768px)").matches)
// 	{
// 		if(direction == 'up'){
// 			$menuBar.add($mbLinks).add($mbLogo).removeClass('mbTranslucent');
// 		}
// 	}
// },{
// 	offset:55
// });