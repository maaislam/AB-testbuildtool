import activate from './lib/experiment';
import { addJsToPage, addCssToPage, pollerLite } from './lib/helpers/utils';
import shared from './lib/shared/shared';

const { ID } = shared;

const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';

addJsToPage(swiperJs, `${ID}__swiperjs`);
addCssToPage(swiperCss, `${ID}__swipercss`);

pollerLite(['body', '.product-page', () => typeof window.Rebuy === 'object', () => typeof window.Swiper === 'function'], activate);
