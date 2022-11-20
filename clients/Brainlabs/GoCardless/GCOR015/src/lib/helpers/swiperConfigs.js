export const swiperConfig = (isPDP) => {
  const numberOfSlidesDesktop = !isPDP ? 4 : 2.5;
  const numberOfSlidesTablet = !isPDP ? 2.2 : 1.5;

  return {
    slidesPerView: 1.3,
    spaceBetween: 16,
    autoHeight: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: numberOfSlidesTablet,
      },
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: numberOfSlidesDesktop,
      },
    },
  };
};
