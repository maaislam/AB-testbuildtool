import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';

import observeDOM from './helpers/observeDOM';
import prepareControl from './helpers/prepareControl';
import getCatalog from './helpers/getCatalog';
import { localStorageGet, localStorageSave } from '../../../../../../globalUtil/util';
import initExternalLib from './helpers/addExternal';
import newMenuWrapper from './components/newMenuWrapper';
import { iconData } from './assets';
import getCartCount from './helpers/getCartCount';
import { initSwiper, swiperConfig } from './helpers/initSwiper';
import clickHandler from './helpers/clickHandler';

const { ID, VARIATION } = shared;
const init = (mutation, urlChanged) => {
  //setup();

  //fireEvent('Conditions Met');

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

  document.querySelector('.AG085a__rep--container')?.classList.add(`${ID}__hide`);
  if (urlChanged) {
    prepareControl(ID);
  }

  const { type, target, addedNodes, removedNodes } = mutation;

  if (
    (type !== 'characterData' &&
      target?.matches('.v7__elem--content-p') &&
      target?.closest('[data-item-id="wishlistButton"]')) ||
    !mutation ||
    urlChanged
  ) {
    prepareControl(ID);
    if (
      (addedNodes && removedNodes && addedNodes[0]?.nodeValue !== removedNodes[0]?.nodeValue) ||
      !mutation
    ) {
      const catalogData = localStorageGet('catalogData');
      //console.log(catalogData);

      document.querySelectorAll(`.${ID}__newmenuwrapper`).forEach((item) => {
        item?.remove();
      });
      document.querySelectorAll(`.${ID}__slide--wrapper`).forEach((item) => {
        item?.remove();
      });

      document.body.insertAdjacentHTML(
        'beforeend',
        newMenuWrapper(ID, iconData, getCartCount(), catalogData)
      );

      initSwiper(`.${ID}__catalog-swiper`, swiperConfig);
    }
  }
};

export default async () => {
  setup('Experimentation', `AvonGlobal - ${ID}`, shared);

  fireEvent('Conditions Met', shared);
  //console.log(VARIATION);
  if (VARIATION === 'control') {
    //console.log('test');
    const controlInit = (mutation, urlChanged) => {
      if (urlChanged && window.location.href.indexOf('basket') !== -1) {
        fireEvent('User clicks the basket', shared);
      }
    };
    observeDOM('body', controlInit);
    return;
  }

  //get catalog data
  const swiperJs = 'https://m7cdn.io/common/js/swiper.js';
  const swiperCss = 'https://dev.m7cdn.io//common/css/swiper.css';
  initExternalLib(swiperJs, swiperCss);

  //if (location.pathname.indexOf('/avon') !== -1) {
  const catalogData = await getCatalog();
  //store in local storage

  localStorageSave('catalogData', JSON.stringify(catalogData));
  //localStorageSave('catalogMonth', getCurrMonth());
  //}
  setTimeout(() => {
    init(false);
  }, 1500);

  clickHandler(ID, VARIATION, fireEvent);

  observeDOM('body', init);
};
