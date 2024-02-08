import setup from './services/setup';

import shared from './shared/shared';
import { topBarIcon } from './assets/icons';
import { observeDOM } from './helpers/utils';

const { ID } = shared;

const topBarHtml = () => {
  const html = `
    <div class="${ID}__topBar">
      <div class="${ID}__topBarIcon">
        ${topBarIcon}   
      </div>
      <div class="${ID}__topBarText">Enjoy FREE SHIPPING on orders over $200</div>
    </div>
  `;

  return html.trim();
};

const getCart = () => {
  return fetch('https://purushapeople.com/cart.js', {
    headers: {
      accept: '*/*'
    }
  }).then((response) => response.json());
};

const init = () => {
  //check if cart has item and if free shipping threshold is reached
  getCart().then((cart) => {
    console.log(cart);
    const cartCount = cart.item_count;
    const cartTotal = cart.total_price / 100;

    if (cartCount > 0 && cartTotal < 200 && !document.querySelector(`.${ID}__topBar`)) {
      document.querySelector('#Search').insertAdjacentHTML('beforebegin', topBarHtml());
      return;
    }

    //remove existing top bar if cart is empty or threshold is not reached
    if (document.querySelector(`.${ID}__topBar`)) {
      document.querySelector(`.${ID}__topBar`).remove();
    }
  });
};

export default () => {
  setup();
  init();
  observeDOM('#sidebar-cart', init);
};
