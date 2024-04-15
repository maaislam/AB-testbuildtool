const initSwiper = (container, initConfig) => {
  //const { slidesPerView, spaceBetween, direction } = initConfig;

  const baseConfig = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  const slider = new window.Swiper(`${container}`, Object.assign(baseConfig, initConfig));
  console.log('🚀 ~ initSwiper ~ slider:', slider);
};

export default initSwiper;
