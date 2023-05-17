$("#menu_toggle").click(function () {
    $('.menu_section').addClass("show_menu");
    $("body").addClass("modal-open");
});
$('#close_icon').click(function () {
    $('.menu_section').removeClass("show_menu");
    $("body").removeClass("modal-open");
});
// $(".menu_overlay").click(function () {
//     alert(1)
//     $('.menu_section').removeClass("show_menu");
// });

$('.main_sider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    // pauseOnHover: true,
    dots: true,
    arrows: false,
    cssEase: 'linear'
});

$('.product_sider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // pauseOnHover: true,
    dots: false,
    arrows: true,
    cssEase: 'linear',
    // prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    // nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: false
        }
    },
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
        }
    }]
});

$('.news_sider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    dots: false,
    arrows: true,
    cssEase: 'linear',
});

$('.banner_product_sider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    dots: true,
    arrows: false,
    cssEase: 'linear',
});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 450) {
        $('.header_section').addClass('fixed_top');
    } else {
        $('.header_section').removeClass('fixed_top');
    }
});

// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

$(".dropedown_menu li").hover(function () {
    var isHovered = $(this).is(":hover");
    if (isHovered) {
        $(this).children("ul").stop().slideDown(300);
    } else {
        $(this).children("ul").stop().slideUp(300);
    }
});

$('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
})


$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
    .on('init', function (event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        focusOnSelect: false,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }]
    });

$('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});

// new Drift(document.querySelector('.drift_trigger'), {
//     paneContainer: document.querySelector('.product_details'),
//     inlinePane: 769,
//     inlineOffsetY: -85,
//     containInline: true,
//     hoverBoundingBox: true
// });

var driftAll = document.querySelectorAll('.drift_trigger');
var pane = document.querySelector('.product_details');
$(driftAll).each(function (i, el) {
    let drift = new Drift(
        el, {
        // zoomFactor: 1.3,
        paneContainer: pane,
        inlinePane: false,
        handleTouch: false,

        // inlinePane: 769,
        inlinePane: 375,
        inlineOffsetY: -85,
        containInline: true,
        hoverBoundingBox: true
    }
    );
});