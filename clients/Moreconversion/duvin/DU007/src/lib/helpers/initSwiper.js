const initSwiper = (container) => {
  const sliderForQuickBrand = new window.Swiper(`${container}`, {
    slidesPerView: 2.9,
    spaceBetween: 20,
    loop: false

    //Navigation arrows
    //navigation: {
    //nextEl: '.swiper-button-next',
    //prevEl: '.swiper-button-prev'
    //}
  });
};

export default initSwiper;
