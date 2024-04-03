import { observeDOM } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

const getCartVal = async () => {
  return fetch('/cart.js').then((res) => res.json());
};
const formatPrice = (number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number / 100);

const init = () => {
  getCartVal().then((data) => {
    //console.log('🚀 ~ init ~ data', data);
    const isDreamCard2 = data.items.some((item) => item.id === 43905578827984);

    if (!isDreamCard2) return;

    const checkoutCta = document.querySelector('.upcart-checkout-button');
    const total = data.total_price;
    const shippingTotal = data.items.length > 1 ? 1495 + 895 : 1495;
    const checkoutTotal = total + shippingTotal;
    //render cart value
    const cartValueEl = `
      <div class="${ID}__cartVals">
        <div class="${ID}__cartVals-price cartVals">
          <span>TOTAL</span>
          <span>${formatPrice(total)}</span>
        </div>
        <div class="${ID}__cartVals-shipping cartVals">
          <span>STANDARD SHIPPING FEE</span>
          <span>${formatPrice(shippingTotal)}</span>
        </div>
      </div>`;

    if (document.querySelector(`.${ID}__cartVals`)) {
      document.querySelector(`.${ID}__cartVals`).remove();
    }

    const attachPoint = document.querySelector('.upcart-footer');
    attachPoint.insertAdjacentHTML('afterbegin', cartValueEl);
    checkoutCta.textContent = `Checkout - ${formatPrice(checkoutTotal)}`;
  });
};

export default () => {
  setup();
  init();

  observeDOM('.upcart-header-text', () => {
    setTimeout(init, 500);
  });
};
