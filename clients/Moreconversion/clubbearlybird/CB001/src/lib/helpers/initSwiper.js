const initSwiper = (container, initConfig) => {
  //const { slidesPerView, spaceBetween, direction } = initConfig;

  const baseConfig = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  const isMobile = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  //eslint-disable-next-line no-unused-vars
  const slider = new window.Swiper(`${container}`, Object.assign(baseConfig, initConfig));
  slider.on('slideChange', (e) => {
    const pagiElement = document.querySelector('.swiper-pagination');
    if (e.realIndex === 4 || (e.realIndex === 0 && isMobile())) {
      pagiElement.style.bottom = '0px';
    } else {
      pagiElement.style.bottom = isMobile() ? '0px' : '10px';
    }
  });
};

export default initSwiper;
