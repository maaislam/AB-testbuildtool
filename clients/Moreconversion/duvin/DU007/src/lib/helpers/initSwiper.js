const initSwiper = (ID, container) => {
  const slider = new window.Swiper(`${container}`, {
    slidesPerView: 2.7,
    spaceBetween: 20,
    loop: false,

    breakpoints: {
      320: {
        slidesPerView: 2.3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 2.1,
        spaceBetween: 20
      },
      1280: {
        slidesPerView: 2.8,
        spaceBetween: 20
      }
    },
    on: {
      sliderFirstMove: () => {
        document.querySelector(`.${ID}__swiper`).classList.remove('custom-overflow');
        document
          .querySelectorAll(`.${ID}__productCarouselContainer .active`)
          .forEach((item) => item.classList.remove('active'));
      }
    }
  });
};

export default initSwiper;
