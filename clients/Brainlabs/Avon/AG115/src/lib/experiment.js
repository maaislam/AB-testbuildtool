import productCards from './components/productCards';
import initSwiper from './helpers/initSwiper';
import { addCssToPage, addJsToPage, pollerLite } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';

const init = () => {
  const productCardsHTML = `
  <div class="${ID}__swiper swiper">
    ${productCards(ID, window.AG115Data)}
  </div>`;
  document.querySelector('.ProductListHeading').insertAdjacentHTML('afterbegin', productCardsHTML);
};

export default () => {
  setup(); //use if needed

  if (VARIATION === 'control') {
    return;
  }

  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);

  pollerLite(
    [() => typeof window.Swiper === 'function' && typeof window.AG115Data !== 'undefined'],
    () => {
      init();
      initSwiper(`.${ID}__swiper`);
    }
  );
};
