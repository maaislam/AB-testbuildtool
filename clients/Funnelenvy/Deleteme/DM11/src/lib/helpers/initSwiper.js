const initSwiper = (container) => {
  const slider = new window.Swiper(`${container}`, {
    slidesPerView: 1,
    spaceBetween: 10,

    //Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  console.log('🚀 ~ initSwiper ~ slider:', slider);
};

export default initSwiper;
