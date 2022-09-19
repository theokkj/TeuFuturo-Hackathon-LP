/*-----------------------------------------------------------------------------------
	MAPA DO CSS PRA NÃO SE PERDER
	===================
    01. Estilo do Cabecalho
    02. Submenu
    03. Scroll to Top
    04. Slider Secao Depoimentos
    05. Slider Secao Squad
    15. WOW Animation
    16. Preloader
-----------------------------------------------------------------------------------*/

(function ($) {

    "use strict";

    $(document).ready(function () {

        // 01. Estilo do Cabecalho
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();
        
        
        // 03. toggle dropdown
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

            // botao Dropdown
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });
            
            // desabilitar dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }
        
        // submenu dropdown toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }
        
        
        // 03. Scroll to Top
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }
        
        
        // 04. Slider Secao Depoimentos
        if ($('.feedback-active').length) {
            $('.feedback-active').slick({
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: true,
                prevArrow: $('.feedback-prev'),
                nextArrow: $('.feedback-next'),
                centerMode: false,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 2,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        }

        
         // 11. Slider Secao Squad
        if ($('.dashboard-screenshot-wrap').length) {
            $('.dashboard-screenshot-wrap').slick({
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: true,
                prevArrow: '<button class="dashboard-prev"><i class="fas fa-arrow-left"></i></button>',
                nextArrow: '<button class="dashboard-next"><i class="fas fa-arrow-right"></i></button>',
                centerMode: true,
                centerPadding: '144px',
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            centerPadding: '50px',
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            centerPadding: '0',
                        }
                    }
                ]
            });
        }
        
        
        // 15. WOW Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
        
        
    });

    
    
    /* ==========================================================================
       Aparece o Menu Mobile no lugar do Menu Desktop aq
       ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();
        
    });


    /* ==========================================================================
       Quando a página é scrollada:
       ========================================================================== */

    $(window).on('scroll', function () {

        // Estilo do Cabecalho e Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       Quando a página é carregeada
       ========================================================================== */

    $(window).on('load', function () {

        // 16. Preloader
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();
          
        
    });



})(window.jQuery);
