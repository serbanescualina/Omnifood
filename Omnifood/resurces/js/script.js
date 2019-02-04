/*sticky nav*/
$(document).ready(function() {
    $('.js-section-features').waypoint(function(direction) {
            if (direction == 'down') {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            } {
                offset: '60px;'
            }
        })
        /* Scroll on buttons */

    $('.js-scroll-to-plan').click(function() {
        $('html, body').animate({ scrollTop: $('.js-section-plan').offset().top }, 1000);
    });

    /*Mobile navigation*/
    $('.js-nav-icon').click(function() {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');
        nav.slideToggle(200);
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-close');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-close');
        }

    })
})