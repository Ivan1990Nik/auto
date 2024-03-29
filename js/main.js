$(function () {

    $(".rateYo").rateYo({
        rating: 4.5,
        readOnly: true
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

    $('.questions__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('questions__acc-link--active')) {
            $(this).removeClass('questions__acc-link--active')
            $(this).children('.questions__acc-text').slideUp()
        } else {
            $('.questions__acc-link').removeClass('questions__acc-link--active')
            $('.questions__acc-text').slideUp()
            $(this).addClass('questions__acc-link--active')
            $(this).children('.questions__acc-text').slideDown()
        }

    })

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top-inner').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0)
    $('.burger').on('click', function (e) {
        e.preventDefault()
        $('.header__top-inner').toggleClass('header__inner--open')
        
    })
    
    
})









