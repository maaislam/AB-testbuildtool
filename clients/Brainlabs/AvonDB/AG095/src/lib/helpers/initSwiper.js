import { pollerLite } from '../../../../../../../globalUtil/util';
export const initSwiper = (container, configObj, fireEvent) => {
  const loadSwiper = () => {
    // eslint-disable-next-line no-undef
    const slider = new Swiper(`${container}`, configObj);
  };
  pollerLite([() => window.Swiper != undefined], () => {
    loadSwiper();
  });
};
export const swiperConfig = {
  allowTouchMove: true,
  slidesPerView: 3.5,
  spaceBetween: 24,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};
