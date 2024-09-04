import activate from './lib/experiment';
import shared from './lib/shared/shared';
import { addCssToPage, addJsToPage, pollerLite } from './lib/helpers/utils';

const { ID } = shared;

const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
addCssToPage(swiperCss, `${ID}__swipercss`);
addJsToPage(swiperJs, `${ID}__swiperjs`).then(() => {
    pollerLite(['body'], activate);
});
