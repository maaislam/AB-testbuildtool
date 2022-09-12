/*eslint-disable implicit-arrow-linebreak */
//import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import productsBanner from './components/productsBanner';
import getProducts from './helpers/getProducts';
import clickHandler from './handlers/clickHandler';
import initSwiper from './helpers/initSwiper';
import observeDOM from './helpers/observeDOM';
import shared from './shared/shared';

const { ID, VARIATION } = shared;
const services = {
  shared,
  fireEvent
};
const isMobile = window.DY.deviceInfo.type === 'smartphone';
const init = (popularProducts) => {
  document.querySelectorAll(`.${ID}__banner-block`).forEach((item) => {
    item?.remove();
  });
  //make sure init only runs on page 1

  if (window.location.hash !== '#page/1') return;

  if (VARIATION === 'control') {
    return;
  }

  console.log(popularProducts);
  const getComputedStyle = (element) => window.getComputedStyle(element, null);

  const anchorElem = document.querySelector('[data-item-id="nextButGroup"]') || document.body;
  const anchorElemCss = anchorElem && getComputedStyle(anchorElem);
  const anchorElemPos = isMobile
    ? {
        top: '50%',
        right: 0
      }
    : {
        top: anchorElemCss.getPropertyValue('top'),
        right: anchorElemCss.getPropertyValue('right')
      };

  anchorElem.classList.add(`${ID}__anchorelem`);
  const anchorPlacement = isMobile ? 'afterbegin' : 'beforebegin';
  anchorElem.insertAdjacentHTML(
    anchorPlacement,
    productsBanner(ID, popularProducts, anchorElemPos)
  );
  const swiperModules = [];
  const parentElem = document.querySelector(`.${ID}__banner-block`);
  initSwiper(window.Swiper, swiperModules, `.${ID}__swiper`, services); //site already has package installed
  clickHandler(ID, parentElem, services);

  if (VARIATION === '2') {
    document.querySelector(`.${ID}__showhide`).click();
  }
  //get height of the cards
  setTimeout(() => {
    const cardHeight = document.querySelector(`.${ID}__swiper`).getBoundingClientRect().height;
    document.querySelector(`.${ID}__showhide`).style = `height:${cardHeight}px`;
  }, 1000);
};

export default async () => {
  setup('Experimentation', `AvonGlobal - ${ID}`, shared);
  if (window.location.hash !== '#page/1') return;
  fireEvent('Conditions Met', shared);
  fireEvent(`user views brocure with ID ${window.PDP_MANAGER.API_DATA.brochure_id}`, shared);
  document.body.addEventListener('click', (e) => {
    if (e.target.closest('[data-item-id="shareContainer"]')) {
      fireEvent('User interacts with the social media ctas', shared);
    }
  });

  if (VARIATION === 'control') {
    return;
  }

  const popularProducts = await getProducts();
  const shopperId = await window.PDP_MANAGER.getShopperId();
  localStorage.setItem(`${ID}__shopperId`, shopperId);

  init(popularProducts);
  const mutationCallback = (mutation, urlChanged) => {
    if (urlChanged) {
      //remove existing
      document.querySelectorAll(`.${ID}__banner-block`).forEach((item) => {
        item?.remove();
      });
      setTimeout(() => {
        init(popularProducts);
      }, 1000);
    }
  };
  observeDOM('body', mutationCallback);
};
