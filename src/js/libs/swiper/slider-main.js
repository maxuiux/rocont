new Swiper('.mySwiper', {
    slidesPerView: 3,
    grabCursor: true,
    spaceBetween: 24,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
