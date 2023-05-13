import { deleteCookie, getCookie, observeDOM, pollerLite, setCookie } from './helpers/utils';
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
  if (announcementBar) {
    announcementBar.style.display = 'none';
  }

  //get cart total
  const cartCurrentData = JSON.parse(localStorage.getItem('cartCurrentData'));
  //console.log('cartCurrentData:', cartCurrentData);
  if (!cartCurrentData) return;

  const { total_price } = cartCurrentData;

  const { discountCode, threshold } = discountConfig[VARIATION];

  //set discount cookie based on cart value

  total_price / 100 > threshold
    ? setCookie('discount_code', discountCode, 1)
    : deleteCookie('discount_code');

  pollerLite(['.js-free-shipping'], () => {
    const discountApplied = getCookie('discount_code');
    const freeShipMsg = document.querySelector('.js-free-shipping');
    const freeShipMsgDisplay = discountApplied ? 'block' : 'none';

    freeShipMsg.style.display = freeShipMsgDisplay;
  });
};

export default () => {
  setup();

  init();
  observeDOM('.header__btn-cart', init);
};
