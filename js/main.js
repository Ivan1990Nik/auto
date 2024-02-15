$(function () {

    $(".rateYo").rateYo({
        rating: 4.5,
        readOnly: true
    });
});

/* 
$('.customers__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.customers__dots'),
    waitForAnimate: false,
   /*  // responsive:
    //   [
    //     {
    //       breakpoint: 700,
    //       settings: {

    //       },
    //     },
    //   ] */


/* $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
}) */

$('.customers__slider').slick({
    arrows: false,
    slidesToShow: 2,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    dots:true,

})



$('.customers__prev').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickPrev')
})
$('.customers__next').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickNext')
})









