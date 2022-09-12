export const galleryWrapper = (id) => {
    const galleryWrapperMain = `<div class="${id}__product-gallery-main-wrapper"></div>`;
    return galleryWrapperMain;
};

export const modalWrapper = (id, closeBtn) => {
    const modalWrapperMain = `<div class="${id}__modal-main-wrapper">
    <div class="${id}__close">${closeBtn}</div>
    </div>`;
    return modalWrapperMain;
};

export const viewMoreBtn = (id) => {
    const viewMoreBtn = `<button class="${id}__view-more-container">
    <span class="${id}__view-more-btn">Mehr anzeigen</span>
    </button>`;
    return viewMoreBtn;
};

export const modalOverlay = (id) => {
    const modalOverlay = `<div class="${id}__overlay"></div>`;
    return modalOverlay;
};

export const swiperSlider = (id) => {
    const swiperSlider = `<div class="${id}__swiper-slide">
    <img>
    </div>`;
    return swiperSlider;
};