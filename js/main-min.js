jQuery(document).ready( function($) {

// fixing top bar

var $menu = $('.top_bar');
    $(window).scroll(function(){
    if ($menu.hasClass('fixed') == false && $(this).scrollTop() > 1 ){
        $menu.addClass('fixed');
    }
    else if($(this).scrollTop() <= 1 ) {
        $menu.removeClass('fixed');
    }
});


// nav drawer

$('.open_drawer').click(function(){
	$('body').addClass('fix');
	$('.popup_filter, .nav_drawer_wrapper').addClass('show');
});

$('.nav_drawer_wrapper .space').click(function(){
	$('body').removeClass('fix');
	$('.popup_filter, .nav_drawer_wrapper').removeClass('show')
});


// close button for all popups

$('.popup_close').click(function(){
	$('body').removeClass('fix');
	$('.popup_filter, .is_popup').removeClass('show')
});

});


