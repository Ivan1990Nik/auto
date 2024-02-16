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








