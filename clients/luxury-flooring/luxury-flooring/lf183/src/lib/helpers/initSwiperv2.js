const initSwiperv2 = (mainSwiperSelector, thumbSwiperSelector) => {
  const mainSwiper = new window.Swiper(thumbSwiperSelector, {
    loop: true,
    spaceBetween: 6,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      //when window width is >= 640px
      320: {
        slidesPerView: 4
      },
      //when window width is >= 768px
      768: {
        slidesPerView: 5
      },
      //when window width is >= 1024px
      1024: {
        slidesPerView: 6
      }
    }
  });
  const thumbSwiper = new window.Swiper(mainSwiperSelector, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'fade',
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
