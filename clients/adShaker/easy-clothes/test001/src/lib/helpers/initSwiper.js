const initSwiper = (container) => {
  window.slider = new window.Swiper(`${container}`, {
    slidesPerView: 1,
    spaceBetween: 5,
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
