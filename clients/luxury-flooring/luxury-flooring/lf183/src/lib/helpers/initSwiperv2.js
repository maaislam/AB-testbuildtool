const initSwiperv2 = (mainSwiperSelector, thumbSwiperSelector) => {
  const mainSwiper = new window.Swiper(thumbSwiperSelector, {
    loop: true,
    spaceBetween: 8,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true
  });
  const thumbSwiper = new window.Swiper(mainSwiperSelector, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: mainSwiper
    }
  });
};

export default initSwiperv2;
