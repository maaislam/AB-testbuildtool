import setup from './services/setup';

import shared from './shared/shared';
import { addCssToPage, addJsToPage, pollerLite } from './helpers/utils';
import { headerBanner } from './components/headerBanner';
import data from './data/data';
import initSwiper from './helpers/initSwiper';
import { swiperConfig5 } from './helpers/swiperConfigs';

const { ID } = shared;

const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';
const init = () => {
  const targetPoint = document.querySelector('[id="16074760"]');
  if (!document.querySelector(`.${ID}__headerBannerWrapper`)) {
    targetPoint.insertAdjacentHTML('afterend', headerBanner(ID, data));
  }

  pollerLite([() => window.Swiper !== undefined], () => {
    initSwiper(`.${ID}__reviewcards-swiper`, swiperConfig5);
    const isMobile = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const pagiElement = document.querySelector('.swiper-pagination');
    if (isMobile()) {
      pagiElement.style.bottom = '0px';
    }
  });
};

export default () => {
  setup(); //use if needed
  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);

  init();
};
