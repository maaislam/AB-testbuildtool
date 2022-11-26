const initSwiper = (container) => {
  window.slider = new window.Swiper(`${container}`, {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      stopOnLastSlide: true
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
};

export default initSwiper;
