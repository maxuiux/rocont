const swiper = new Swiper('[data-component="items-slider:slider-stories"]', {
    slidesPerView: 'auto',
    effect: 'slide',
    spaceBetween: 8,
    centeredSlides: false,
    grabCursor: true,

    breakpoints: {
        320: {
            slidesPerView: 'auto',
            effect: 'none',
            spaceBetween: 8,
        },

        484: {
            slidesPerView: 'auto',
            effect: 'slide',
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
        },
    },

    navigation: {
        nextEl: '[data-element="items-slider:next"]',
        prevEl: '[data-element="items-slider:prev"]',
    },
})
