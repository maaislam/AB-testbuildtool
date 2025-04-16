import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { addCssToPage, addJsToPage, pollerLite } from './helpers/utils';
import { headerBanner } from './components/headerBanner';
import data from './data/data';
import initSwiper from './helpers/initSwiper';
import { swiperConfig, swiperConfig5 } from './helpers/swiperConfigs';

const { ID, VARIATION } = shared;

const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';
const init = () => {
  const targetPoint = document.querySelector('[id="16074760"]');
  if (!document.querySelector(`.${ID}__headerBannerWrapper`)) {
    targetPoint.insertAdjacentHTML('afterend', headerBanner(ID, data));
  }

  pollerLite([() => window.Swiper !== undefined], () => {
    initSwiper(`.${ID}__reviewcards-swiper`, swiperConfig5);
  });
};

export default () => {
  setup(); //use if needed
  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init();
};
