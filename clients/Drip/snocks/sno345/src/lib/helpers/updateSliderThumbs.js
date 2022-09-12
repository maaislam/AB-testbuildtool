const updateSliderThumbs = (ID, selector) => {
    if (selector === document.querySelector(`.${ID}__modal-main-wrapper .swiper-button-next`)) {
        const box = document.querySelector('.product-gallery__thumbs .swiper-slide.swiper-slide-thumb-active');
        let third;

        let placeholder = box.nextElementSibling;

        while (placeholder) {
        if (!placeholder.classList.contains('u-hidden')) {
            third = placeholder;
            break;
        }

        placeholder = placeholder.nextElementSibling;
        }
        box.classList.remove('swiper-slide-thumb-active');
        third.classList.add('swiper-slide-thumb-active');
    } else if (selector === document.querySelector(`.${ID}__modal-main-wrapper .swiper-button-prev`)) {
        const box = document.querySelector('.product-gallery__thumbs .swiper-slide.swiper-slide-thumb-active');
        let prev;

        let placeholder = box.previousElementSibling;

        while (placeholder) {
        if (!placeholder.classList.contains('u-hidden')) {
            prev = placeholder;
            break;
        }

        placeholder = placeholder.previousElementSibling;
        }
        box.classList.remove('swiper-slide-thumb-active');
        prev.classList.add('swiper-slide-thumb-active');
    }
};

export default updateSliderThumbs;
