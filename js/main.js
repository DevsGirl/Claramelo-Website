(function ($) {
"use strict";

// meanmenu
$('#mobile-menu-active').meanmenu({
	meanScreenWidth: "991",
	meanMenuContainer: '.mobile-menu'
});

// owlCarousel
$('.slider-active').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})
})(jQuery);
