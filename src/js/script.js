$(document).ready(function() {

    $('.hamburger').click(function(event) {
        $('.menu, .header, .hamburger, .main__socials').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.catalog__list').slick({
        arrows: false,
        dots: false,
        slidesToShow: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    });
});