const initSwiper = (container, fireEvent, shared) => {
  const slider = new window.Swiper(`${container}`, {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      stopOnLastSlide: true
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className} ${shared.ID}__pagination"></span>`;
      }
    },

    //Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  window.slider = slider;

  slider.on('slideChange', () => {
    const isRunning = slider.autoplay.running;
    const swiperPagination = document.querySelector('.swiper-pagination');
    window.slider.startTime = Date.now();
    if (!isRunning) {
      slider.autoplay.start();
    }
    if (slider.isEnd) {
      //stop play button animation
      document
        .querySelector(`.${shared.ID}__controlImageWrapper`)
        .classList.remove(`${shared.ID}__animate`);
      //hide pagination bar
      swiperPagination.classList.add(`${shared.ID}__opacity-0`);
    } else {
      swiperPagination.classList.remove(`${shared.ID}__opacity-0`);
    }
  });
  slider.on('slideNextTransitionStart', () => {
    fireEvent('users goes to next slide', shared);
  });
  slider.on('slidePrevTransitionStart', () => {
    fireEvent('users goes to previous slide', shared);
  });

  const activeBullet = () =>
    document.querySelector(`.${shared.ID}__pagination.swiper-pagination-bullet-active`);

  slider.on('touchStart', () => {
    clearTimeout(window.slider.nextSlideTimer);
    slider.autoplay.stop();
    activeBullet().classList.add(`${shared.ID}__pause-animation`);
    window.slider.pauseTime = Date.now();
  });

  slider.on('touchEnd', () => {
    const newDelay = 5000 - (window.slider.pauseTime - window.slider.startTime);
    //slider.autoplay.start();
    activeBullet().classList.remove(`${shared.ID}__pause-animation`);
    window.slider.nextSlideTimer = setTimeout(() => {
      slider.slideNext();
    }, newDelay);
  });
};

export default initSwiper;
