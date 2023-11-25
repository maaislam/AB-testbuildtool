const initSwiper = (container) => {
    window.slider = new window.Swiper(`${container}`, {
        breakpoints: {
            990: {
                slidesPerView: 6,
                spaceBetween: 16
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 15
            }
        }
    });
};

export default initSwiper;
