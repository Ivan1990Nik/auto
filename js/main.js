$(function () {

    $(".rateYo").rateYo({
        rating: 4.5,
        readOnly: true
    });
});




$('.customers__slider').slick({
    arrows: false,
    slidesToShow: 2,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    dots: true,
    appendDots: $('.customers__dots'),
})




$('.customers__prev').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickPrev')
})
$('.customers__next').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickNext')
})

$('.questions__acc-click').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('questions__acc-click--after')) {
        $(this).removeClass('questions__acc-click--after')
        $(this).children('.questions__acc-text').slideUp()
    } else {
        $('.questions__acc-click').removeClass('program__acc-link--active')
        $('.questions__acc-text').slideUp()
        $(this).addClass('questions__acc-click--after')
        $(this).children('.questions__acc-text').slideDown()
    }
})









