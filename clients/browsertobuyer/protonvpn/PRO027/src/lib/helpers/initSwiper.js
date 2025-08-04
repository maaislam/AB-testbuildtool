const initSwiper = (id) => {
  const triggerClick = () => {
    //eslint-disable-next-line no-underscore-dangle
    window._conv_q.push(['triggerConversion', '1004101961']);
  };
  const swiper = new window.Swiper(`.${id}__swiper`, {
    spaceBetween: 16,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        spaceBetween: 8
      }
    },
    on: {
      slideChange: () => {
        triggerClick();
      }
    }
  });

  const swiper2 = new window.Swiper(`.${id}__swiper2`, {
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper
    },
    breakpoints: {
      767: {
        spaceBetween: 8
      }
    },
    on: {
      slideChange: () => {
        triggerClick();
      },
      click: () => {
        triggerClick();
      }
    }
  });
};

export default initSwiper;
