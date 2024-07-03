export const swiperConfig = {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    //when window width is >= 320px
    //300: {
    //slidesPerView: 1.1
    //},
    //640: {
    //slidesPerView: 1.6
    //},
    //768: {
    //slidesPerView: 2.2
    //},
    //1024: {
    //slidesPerView: 4
    //}
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
};

export const swiperConfig5 = {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    //when window width is >= 320px
    1024: {
      slidesPerView: 2.7
    }
  }
};
