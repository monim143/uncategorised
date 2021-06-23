/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});




/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {


    // Dropdown Menu Slide Toggle
    $(function () {
        if ($('.navbar .dropdown').length) {
            if (window.matchMedia("(min-width: 992px)").matches) {
                $('.navbar .dropdown').hover(function () {
                    $(this).children(".dropdown-menu").stop(true, false, true).slideToggle(350);
                });
            }
        }
        $('.navbar-toggler').on('click', function () {
            $('.navbar-toggler').find('span').toggleClass('ni-menu ni-cross');
        });
    });

    
    // owlCarousel init
    // for all 
    $(function () {
        if ($('.article-carousel').length) {
            $(".article-carousel").owlCarousel({
                items: 5,
                margin: 0,
                nav: false,
                loop: true,
                rewind: true,
                autoplay: true,
                dots: true,
                smartSpeed: 1000,
                autoplayHoverPause: true,
                autoplayTimeout: 2000,
                navText: ['<span class="ni ni-chevron-left"></span>', '<span class="ni ni-chevron-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    },
                    1400: {
                        items: 5
                    },
                    1600: {
                        items: 6
                    }
                }
            });
        }
        if ($('.trending-news-carousel').length) {
            $(".trending-news-carousel").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                rewind: true,
                autoplay: true,
                dots: false,
                smartSpeed: 1000,
                autoplayHoverPause: true,
                autoplayTimeout: 2000,
                navText: ['<span class="ni ni-chevron-left"></span>', '<span class="ni ni-chevron-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    },
                }
            });
        }
        if ($('.special-carousel').length) {
            $(".special-carousel").owlCarousel({
                items: 1,
                margin: 30,
                nav: true,
                loop: true,
                rewind: true,
                autoplay: true,
                dots: false,
                smartSpeed: 1000,
                autoplayHoverPause: true,
                autoplayTimeout: 2500,
                navText: ['<span class="ni ni-chevron-left"></span>', '<span class="ni ni-chevron-right"></span>'],
            });
        }
    });



});
