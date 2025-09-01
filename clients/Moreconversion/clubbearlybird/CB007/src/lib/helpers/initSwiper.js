const initSwiper = () => {
  const swiper = new window.Swiper('.mySwiper', {
    spaceBetween: 10,
    slidesPerView: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 10
      }
    }
  });
  const swiper2 = new window.Swiper('.mySwiper2', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
};

export default initSwiper;
