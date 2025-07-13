const swiper = new Swiper('[data-component="items-slider:slider-stories"]', {
    slidesPerView: 'auto',
    effect: 'slide',
    spaceBetween: 8,
    centeredSlides: false,
    grabCursor: true,
    navigation: {
        nextEl: '[data-element="items-slider:next"]',
        prevEl: '[data-element="items-slider:prev"]',
    },
})
