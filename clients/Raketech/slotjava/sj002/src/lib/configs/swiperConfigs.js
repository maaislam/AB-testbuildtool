export const bookmakerSwiperConfig = {
  slidesPerView: 4,
  spaceBetween: 10,
  breakpoints: {
    //when window width is >= 320px
    300: {
      slidesPerView: 1.1
    },
    640: {
      slidesPerView: 1.6
    },
    768: {
      slidesPerView: 2.2
    },
    1024: {
      slidesPerView: 4
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
};
