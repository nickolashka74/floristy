$(document).ready(function() {

    $('.hamburger').click(function(event) {
        $('.menu, .header__logo').toggleClass('active');
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
                    dots: true
                }
            }
        ]
    });
});