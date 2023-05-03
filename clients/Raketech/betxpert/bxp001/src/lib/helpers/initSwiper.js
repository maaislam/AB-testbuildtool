const initSwiper = (container, initConfig) => {
  //const { slidesPerView, spaceBetween, direction } = initConfig;

  const slider = new window.Swiper(`${container}`, {
    ...initConfig,

    //Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
};

export default initSwiper;
