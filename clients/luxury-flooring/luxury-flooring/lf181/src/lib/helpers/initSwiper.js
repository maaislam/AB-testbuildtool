const initSwiper = (container) => {
  return new window.Swiper(container, {
    slidesPerView: 1,
    spaceBetween: 11,
    pagination: {
      el: '.swiper-pagination'
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 11
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 11
      }
    }
  });
};

export default initSwiper;
