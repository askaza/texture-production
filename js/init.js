$(document).ready(function(){
	$(".b-menu_type_main .b-menu__icon").click(function(event) {
		$(this).closest('.b-menu').toggleClass('b-menu_state_collapsed');
	});
	//$(".b-stripe_content_header").sticky({topSpacing:0});

	$(".b-menu_type_main .b-menu__item-text").click(function(event) {
		$(this).closest('.b-menu').toggleClass('b-menu_state_collapsed');
	});

    //scroll navigation
    $('.b-menu__list a').click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href'));

        if ($target.size()) {
            $('html,body').animate({
                scrollTop: $target.offset().top - $('.b-stripe_content_header').height()
            }, 800);
        }
    });


});
function stickyHeader() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = $('.b-stripe_content_main').outerHeight(),
            header = $('.b-stripe_content_header');
        if (distanceY > shrinkOn) {
			header.addClass('b-stripe_size_small');
        } else {
            if (header.hasClass('b-stripe_size_small')) {
				header.removeClass('b-stripe_size_small');
            }
        }
    });
}
window.onload = stickyHeader();
