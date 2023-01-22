import { pollerLite } from '../../../../../../globalUtil/util';
import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import { initExternalLib } from './helpers/utils';
import shared from './shared/shared';
import getProductImages from './helpers/getProductImages';
import sliderWrapper from './components/sliderWrapper';
import initSwiper from './helpers/initSwiper';

const { ID } = shared;
const swiperJs = 'https://m7cdn.io/common/js/swiper.js';
const swiperCss = 'https://dev.m7cdn.io//common/css/swiper.css';

const init = async () => {
  const stockProductGallery = document.querySelector('.product-gallery__content');

  //init swiper
  initExternalLib(swiperJs, swiperCss);

  //get product data i.e. images

  const productImages = await getProductImages();
  stockProductGallery.classList.add(`${ID}__hide`);
  //place new html for swiper
  stockProductGallery.insertAdjacentHTML('beforebegin', sliderWrapper(ID, productImages));
  pollerLite([() => typeof window.Swiper === 'function'], () => {
    initSwiper('.swiper');
    document.querySelector('.sticky-sidebar').classList.add(`${ID}__mb16`);

    document.querySelector(`.${ID}__slider`).addEventListener('click', ({ target }) => {
      if (target.closest('img')) {
        //get image data index
        const { index } = target.closest('img').dataset;
        stockProductGallery
          .querySelector(`.product-gallery__main_item[data-item-index="${index}"] img`)
          .click();
      }
    });
  });
};

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  //console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  if (document.querySelector(`.${ID}__slider`)) return;

  init();
};
