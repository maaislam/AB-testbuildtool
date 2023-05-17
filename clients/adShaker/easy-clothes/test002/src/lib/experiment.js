/*eslint-disable object-curly-newline */
import {
  deleteCookie,
  formatPrice,
  getCookie,
  observeDOM,
  pollerLite,
  setCookie
} from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { VARIATION } = shared;

const discountConfig = {
  1: {
    discountCode: 'FS149',
    threshold: 149
  },
  2: {
    discountCode: 'FS99',
    threshold: 99
  },
  3: {
    discountCode: 'FreeShipping',
    threshold: 0
  }
};
const init = () => {
  //hide announcementbar
  const announcementBar = document.querySelector('.vb-tape-set');
  const { discountCode, threshold } = discountConfig[VARIATION];
  const newAnnouncement = `FREE US SHIPPING ${
    threshold > 0 ? `OVER $${threshold} USD` : ''
  } / FREE INTL. SHIPPING OVER $150 USD`;

  if (announcementBar) {
    announcementBar.querySelector('p').innerText = newAnnouncement;
  }
  deleteCookie('discount_code');

  //get cart total
  const cartCurrentData = JSON.parse(localStorage.getItem('cartCurrentData'));
  //console.log('cartCurrentData:', cartCurrentData);
  if (!cartCurrentData) return;

  const { total_price } = cartCurrentData;
  //console.log(' total_price:', total_price, threshold, total_price / 100 > threshold);

  //set discount cookie based on cart value

  total_price / 100 > threshold
    ? setCookie('discount_code', discountCode)
    : deleteCookie('discount_code');

  pollerLite(['.js-free-shipping'], () => {
    const discountApplied = getCookie('discount_code');
    const amountToSpend = threshold * 100 - total_price;
    console.log('🚀 ~ file: experiment.js:66 ~ pollerLite ~ amountToSpend:', amountToSpend);
    const newMessage =
      discountApplied || amountToSpend <= 0
        ? 'Free Shipping'
        : `Spend ${formatPrice(amountToSpend)} USD more and get free shipping`;

    const freeShipBanners = document.querySelectorAll('.js-free-shipping');
    freeShipBanners.forEach((freeShipBanner) => {
      const freeShipMsgContent = freeShipBanner.querySelector('.free-shipping__text');

      //eslint-disable-next-line no-param-reassign
      freeShipBanner.querySelector('[data-js-text]').innerText = newMessage;

      !discountApplied
        ? freeShipMsgContent.classList.add('add-more')
        : freeShipMsgContent.classList.remove('add-more');
    });
  });
};

export default () => {
  setup();

  init();
  observeDOM('.header__btn-cart', init);
};
