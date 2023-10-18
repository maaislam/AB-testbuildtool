const initSwiper = (container) => {
  window.slider = new window.Swiper(`${container}`, {
    breakpoints: {
      768: {
        slidesPerView: 2.2,
        spaceBetween: 10
      },
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10
      }
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      stopOnLastSlide: true
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
};

export default initSwiper;
