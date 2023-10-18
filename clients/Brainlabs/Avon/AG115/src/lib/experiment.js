import initSwiper from './helpers/initSwiper';
import { addCssToPage, addJsToPage, pollerLite } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';

const init = () => {
  //add swiper js
  console.log(ID, window.Swiper);
};

export default () => {
  setup(); //use if needed

  console.log(ID, window.Swiper);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);

  pollerLite([() => typeof window.Swiper === 'function'], () => {
    //attach cards here
    initSwiper(`.${ID}__swiper`);
    init();
  });
};
