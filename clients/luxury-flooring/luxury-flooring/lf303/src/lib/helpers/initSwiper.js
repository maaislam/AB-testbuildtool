const initSwiper = (container) => {
  window.slider = new window.Swiper(`${container}`, {
    slidesPerView: 1.5,
    spaceBetween: 5,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
};

export default initSwiper;
