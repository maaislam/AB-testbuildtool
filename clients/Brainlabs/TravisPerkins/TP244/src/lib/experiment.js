/*eslint-disable object-curly-newline */
/*eslint-disable function-paren-newline */

//import Swiper styles
//import 'swiper/css';

import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { pollerLite } from '../../../../../../globalUtil/util';
import deliveryDates from './components/dekiveryDates';
import { addCssToPage, addJsToPage } from './helpers/addLibrary';
//import { addCssToPage, addJsToPage } from './helpers/addLibrary';
import checkoutAdjust from './helpers/checkoutAdjust';
import clickHandler from './helpers/clickHandler';
import { getBasketEntries, getBrnchDeliveryDays, getEligibility } from './helpers/getApiData';
import initSwiper from './helpers/initSwiper';
import {
  formatDateStr,
  getCustomerLocation,
  getItemData,
  isPDP,
  removeExisting
} from './helpers/utils';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const DOM_RERENDER_DELAY = 2000;

const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';

const init = async () => {
  //remove existing incase of re render
  removeExisting(`.${ID}__deliverydates`);
  if (window.location.pathname === '/checkout') {
    setTimeout(() => {
      checkoutAdjust(ID, fireEvent, shared);
    }, DOM_RERENDER_DELAY);
    return;
  }

  //run only in PDP
  const locationData = getCustomerLocation();
  if (!isPDP() || !locationData) return;

  //get data

  const eligibility = await getEligibility(getItemData(), locationData);

  console.log(eligibility, locationData, getItemData());

  const anchorElem =
    document.querySelector('[data-test-id="product-detail"] [data-test-id="price"]') ||
    document.querySelector('[class^="ProductDetailMobile__PriceWr-sc"] [data-test-id="price"]');

  const { status, type } = eligibility[0].deliveryEligibility;

  const { deliveryPostcode } = locationData;

  //get availavle days
  const deliveryDays = await getBrnchDeliveryDays(deliveryPostcode);

  //add swiper js

  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);

  const deleiveryDateParsed = deliveryDays
    .map(({ date, slotAvailable }) => slotAvailable && { parsedDate: formatDateStr(date), date })
    .filter(Boolean)
    .slice(0, 14);
  //console.log(deleiveryDateParsed);

  //branchdelivery item not in cart and user seeing the dateslider 1st in a session
  //fire Conditions Met
  const basketData = await getBasketEntries();
  const { basketEntries } = basketData;
  const hasDeliveryItemInCart = basketEntries.some((item) => item.deliveryType === 'BRANCH');
  //check if delivery button is disabled
  const deliveryButton = document.querySelector('[data-test-id="add-to-delivery-btn"]');
  if (deliveryButton && deliveryButton.disabled) {
    //console.log('delivery button disabled');
    return;
  }

  //do not render incase status or type or hasDeliveryItemInCart  invalid
  if (status !== 'AVAILABLE' || type !== 'BRANCH' || hasDeliveryItemInCart) return;

  if (!hasDeliveryItemInCart && sessionStorage.getItem(`${ID}__seen-once`) !== 'true') {
    fireEvent('Conditions Met', shared);
    sessionStorage.setItem(`${ID}__seen-once`, 'true');
  }

  if (VARIATION === 'control') {
    return;
  }

  removeExisting(`.${ID}__deliverydates`);
  anchorElem.insertAdjacentHTML('afterend', deliveryDates(ID, deleiveryDateParsed));
  initSwiper(`.${ID}__deliverydates--swiper`, fireEvent, shared);
  pollerLite([() => typeof window.Swiper === 'function'], () => {});

  //css adjustments
  const bulkSavingBlock = document.querySelector(
    '[class^="ProductDetailDesktop__BulkSavingsWrapper-sc"]'
  );
  if (bulkSavingBlock && bulkSavingBlock.innerText === '') {
    bulkSavingBlock.classList.add(`${ID}__bulksaving--empty`);
  }
};

export default () => {
  setup('Experimentation', `TravisPerkins - ${ID}`, shared);
  setTimeout(init, DOM_RERENDER_DELAY);
  //Poll and re-run init
  pollerLite(['#app-container'], () => {
    const appContainer = document.querySelector('#app-container');
    let oldLocation = JSON.stringify(getCustomerLocation());
    let oldProductInfo = JSON.stringify(getItemData());
    let oldHref = window.location.href;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        //console.log(mutation);
        if (
          oldLocation !== JSON.stringify(getCustomerLocation()) ||
          oldProductInfo !== JSON.stringify(getItemData()) ||
          oldHref !== window.location.href
        ) {
          oldLocation = JSON.stringify(getCustomerLocation());
          oldProductInfo = JSON.stringify(getItemData());
          oldHref = window.location.href;

          setTimeout(init, DOM_RERENDER_DELAY);
        }
      });
    });

    const config = {
      childList: true,
      subtree: true,
      characterData: true
    };

    appContainer.addEventListener('click', ({ target }) => {
      clickHandler(target, fireEvent, shared);
    });

    observer.observe(appContainer, config);
  });
};
