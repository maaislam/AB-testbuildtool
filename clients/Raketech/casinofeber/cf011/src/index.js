import activate from './lib/experiment';
import { addCssToPage, addJsToPage, pollerLite } from './lib/helpers/utils';
import shared from './lib/shared/shared';

const { ID } = shared;

const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';

pollerLite(['body'], () => {
  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);
  setTimeout(activate, 1500);
});
