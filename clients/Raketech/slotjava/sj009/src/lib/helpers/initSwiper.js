const initSwiper = (id) => {
  const styleSheet = document.createElement('link');
  styleSheet.rel = 'stylesheet';
  styleSheet.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
  document.head.appendChild(styleSheet);

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
  document.head.appendChild(script);

  script.onload = () => {
    const swiper = new window.Swiper(`.${id}__swiper`, {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
    console.log('🚀 ~ initSwiper ~ swiper:', swiper);
  };
};

export default initSwiper;
