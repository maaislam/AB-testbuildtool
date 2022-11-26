//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { pollerLite } from '../../../../../../../../globalUtil/util';
import { addCssToPage, addJsToPage } from './helpers/utils';
import imageItems from './components/imageItems';
import { imagesData } from './data';
import initSwiper from './helpers/initSwiper';

const { ID, VARIATION } = shared;

const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';

const inti = () => {
  document.body.classList.add(`${ID}-${VARIATION}__body`);
  if (document.querySelector(`.${ID}__swiper`)) return;

  //add swiper js

  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);

  pollerLite([() => typeof window.Swiper === 'function'], () => {
    const anchorElm = document.getElementById('article-494531247');
    anchorElm.classList.add(`${ID}__hide`, `${ID}__anchorELm`);

    anchorElm.insertAdjacentHTML('beforebegin', imageItems(ID, imagesData));
    initSwiper(`.${ID}__swiper`);
  });

  if (VARIATION === '2') {
    const mainContainer = document.getElementById('container1641345140');
    mainContainer.classList.add(`${ID}__mainContainer`);

    const formElm = document.getElementById('platter-539859803');
    const formElmContainer = formElm.closest('.c29-columns__col');

    formElmContainer.classList.add(`${ID}__formElmContainer`);
  }
};

export default () => {
  inti();
};
