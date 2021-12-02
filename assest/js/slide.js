$(document).ready(function () {
    $('.note__elements').slick({
        infinite: true,
        slidesToShow: 3,
        slideToScroll: 1,
        centerMode: true,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        dots: true,
        dotsClass: 'slick__note__dots',
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick__note__arrow"><i class="fas fa-chevron-up"></i></button>',
        nextArrow: '<button type="button" class="slick__note__arrow"><i class="fas fa-chevron-down"></i></button>',
    })

    $('.consult__container__element__grid').slick({
        infinite: true,
        slidesToShow: 3,
        slideToScroll: 1,
        arrows: true,
        centerMode: true,
        adaptiveHeight: true,
        dots: true,
        dotsClass: 'slick__consult__dots',
        prevArrow: '<button type="button" class="slick__consult__arrow slick__consult__prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick__consult__arrow slick__consult__next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            // {
            //     breakpoint: 935,
            //     settings: {
            //         slidesToShow: 2,
            //         slideToScroll: 1,
            //         infinite: true,
            //         centerMode: false,
            //     }
            // },
            {
                breakpoint: 845,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1,
                    infinite: true,
                    centerMode: false,
                    arrows: false,
                    adaptiveHeight: false,
                }
            },
        ]
    })
})