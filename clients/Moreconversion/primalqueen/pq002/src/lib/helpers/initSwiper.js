const initSwiper = (container, initConfig) => {
  //const { slidesPerView, spaceBetween, direction } = initConfig;

  const baseConfig = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  //eslint-disable-next-line no-unused-vars
  const slider = new window.Swiper(`${container}`, Object.assign(baseConfig, initConfig));
  //slider.on('slideChange', () => {
  //console.log('change');
  //});
};

export default initSwiper;
