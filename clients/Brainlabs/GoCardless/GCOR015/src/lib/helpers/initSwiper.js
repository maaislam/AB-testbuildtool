const initSwiper = (container, configObj, fireEvent) => {
  var swiperInterval = window.setInterval(mySlick, 300);
  const containerElm = document.querySelector(container);

  const loadSwiper = () => {
    const slider = new Swiper(`${container}`, configObj);
    slider.on('slideChange', () => {
      fireEvent(`Interacts with carousel on ${location.pathname === '/' ? 'homepage' : 'PDP'}`);
    });
    slider.on('reachEnd', () => {
      containerElm.classList.add('last-slide-reached');
    });
    slider.on('slidePrevTransitionStart', () => {
      containerElm.classList.remove('last-slide-reached');
    });
    window.swiperSlider = slider;
  };
  function mySlick() {
    if (Swiper != 'undefined') {
      loadSwiper();
      window.clearInterval(swiperInterval);
    }
  }
};

export default initSwiper;
