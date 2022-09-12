import swiperConfig from './swiperConfig';

const initSwiper = (Swiper, swiperModules, container, trackingHelper) => {
  const { shared, fireEvent } = trackingHelper;
  swiperConfig.modules = swiperModules;
  const slider = new Swiper(`${container}`, swiperConfig);
  slider.on('slideChange', () => {
    // console.log('slide changed');
    // fireEvent('Scroll on carousel', shared);
    document.querySelectorAll('.AG102a__productvariant-selected').forEach((item) => {
      item?.classList.remove('is-open');
    });
    document.querySelectorAll('.AG102a__productvariant--options').forEach((item) => {
      item?.remove();
    });
  });
  slider.on('slideNextTransitionEnd', () => {
    fireEvent('User scrolls right on the tab', shared);
  });
  slider.on('slidePrevTransitionEnd', () => {
    fireEvent('User scrolls left on the tab', shared);
  });
};

export default initSwiper;
