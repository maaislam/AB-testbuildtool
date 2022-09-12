const hideSliderBtn = (ID) => {
    if (
        document
        .querySelector(`.${ID}__modal-main-wrapper .swiper-button-prev`)
        .classList.contains('swiper-button-disabled')
    ) {
        document
            .querySelector(`.${ID}__modal-main-wrapper .swiper-button-prev`)
            .classList.add(`${ID}__hide`);
    } else {
        document
            .querySelector(`.${ID}__modal-main-wrapper .swiper-button-prev`)
            .classList.remove(`${ID}__hide`);
    }

    if (
        document
        .querySelector(`.${ID}__modal-main-wrapper .swiper-button-next`)
        .classList.contains('swiper-button-disabled')
    ) {
        document
            .querySelector(`.${ID}__modal-main-wrapper .swiper-button-next`)
            .classList.add(`${ID}__hide`);
    } else {
        document
            .querySelector(`.${ID}__modal-main-wrapper .swiper-button-next`)
            .classList.remove(`${ID}__hide`);
    }
};

export default hideSliderBtn;
