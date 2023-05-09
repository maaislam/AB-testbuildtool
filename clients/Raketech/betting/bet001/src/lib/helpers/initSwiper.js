const initSwiper = (container, initConfig) => {
  //const { slidesPerView, spaceBetween, direction } = initConfig;

  const baseConfig = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

  const slider = new window.Swiper(`${container}`, Object.assign(baseConfig, initConfig));
};

export default initSwiper;
