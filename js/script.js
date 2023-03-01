$("#menu_toggle").click(function () {
    $('.menu_section').addClass("show_menu");
});
$('#close_icon').click(function () {
    $('.menu_section').removeClass("show_menu");
});

$(".menu_overlay").click(function () {
    $('.menu_section').removeClass("show_menu");
});

$('.main_sider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
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


