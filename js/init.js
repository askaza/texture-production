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

    $(document).click(function (e) {
        var container = $(".b-popover-wrapper");
        if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $('.b-popover').hide();
        }
    });


    // show popover
    $('.js-show-popover').click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href'));
        if ($target.size()) {
            if ($target.is(':visible')) {
                $target.fadeOut();
            } else {
                $target.fadeIn();
            }
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
