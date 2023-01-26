/*-----------------------------------------------------------------------------------
    Template Name: Saap - Sass Landing HTML Template
    Description: Saap - Sass Landing HTML Template
    Author: WebTend 
    Author URI: https://webtend.net/
    Version: 1.0
-----------------------------------------------------------------------------------*/

(function($) {
    'use strict';

    //===== Main Menu
    function mainMenu() {
        // Variables
        var var_window = $(window),
            navContainer = $('.header-navigation'),
            navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            navMenuLi = $('.nav-menu ul li ul li'),
            closeIcon = $('.navbar-close');
        // navbar toggler
        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });
        // close icon
        closeIcon.on('click', function(e) {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });
        // adds toggle button to li items that have children
        navMenu.find('li a').each(function() {
            if ($(this).next().length > 0) {
                $(this).parent('li').append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>');
            }
        });
        // expands the dropdown menu on each click
        navMenu.find('li .dd-trigger').on('click', function(e) {
            e.preventDefault();
            $(this).parent('li').children('ul').stop(true, true).slideToggle(350);
            $(this).parent('li').toggleClass('active');
        });
        // check browser width in real-time
        function breakpointCheck() {
            var windoWidth = window.innerWidth;
            if (windoWidth <= 1199) {
                navContainer.addClass('breakpoint-on');
            } else {
                navContainer.removeClass('breakpoint-on');
            }
        }
        breakpointCheck();
        var_window.on('resize', function() {
            breakpointCheck();
        });
    };
    // Document Ready
    $(document).ready(function() {
        mainMenu();
    });

    // Nav Overlay On
    $(".navbar-toggler, .navbar-close,.nav-overlay").on('click', function (e) {
        $(".nav-overlay").toggleClass("active");
    });
    $(".nav-overlay").on('click', function (e) {
        $(".navbar-toggler").removeClass("active");
        $(".nav-menu").removeClass("menu-on");
    });


    //===== Prealoder
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut('500');
    })
    
    //===== Sticky
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".header-navigation").removeClass("sticky");
        } else {
            $(".header-navigation").addClass("sticky");
        }
    });

    //===== Back to top
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //===== Counter js
    $('.count').counterUp({
        delay: 100,
        time: 4000
    });

    //===== Magnific-popup js
    $('.video-popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    $(".img-popup").magnificPopup({
        type: "image",
         gallery: { 
          enabled: true 
        }
    });
    
    //===== Slick slider js
    $('.portfolio-slider-one').slick({
		dots: true,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
		slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    var sliderArrows = $('.testimonial-arrows');
    $('.testimonial-slider-one').slick({
		dots: false,
		arrows: true,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
		slidesToShow: 2,
        slidesToScroll: 1,
        appendArrows: sliderArrows,
        prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.testimonial-slider-two').slick({
		dots: false,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
		slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.testimonial-slider-three').slick({
		dots: false,
		arrows: false,
        infinite: true,
		autoplaySpeed: 1500,
        autoplay: true,
		slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
		nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    //====== Pricing Js
    function pricingCheck() {
        var checkBox = $("#checkActive");
        var text1 = $(".price-one");
        var text2 = $(".price-two");
        checkBox.on('click', function(e) {
            if (e.target.checked) {
                text1.css('display', 'none');
                text2.css('display', 'block');
            } else {
                text1.css('display', 'block');
                text2.css('display', 'none');
            }
        });
    }
    pricingCheck();

    //====== Parallax js

    $('.scene').each(function () {
        new Parallax($(this)[0]);
    });

    //======= Aos Animate js

    AOS.init({
        easing: 'linear',
        duration: 450
    });

})(window.jQuery);