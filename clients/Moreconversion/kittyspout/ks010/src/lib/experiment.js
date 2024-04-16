import { formatPrice, getCartVal, observeDOM, pollerLite } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  getCartVal().then((data) => {
    const anchorPoint = document.querySelector('.rebuy-cart__flyout-subtotal');
    const anchorPoint2 = document.querySelector('.cart__item-sub.cart__item-row:not(.cart__discounts)');
    const subtotal = data.total_price;
    const shippingtotal = 799;
    const grandTotal = shippingtotal + subtotal;

    //if (subtotalElem) subtotalElem.innerHTML = `${formatPrice(grandTotal)}`;

    const htmlStr = `
    <div class='${ID}__row'>
      <div class='${ID}__shippingTextRow'>
        <span class='${ID}__shippingText'>Shipping Charge</span>
        <span class='${ID}__shippingValue'>$7.99</span>
      </div>
      <div class='${ID}__grandTotalRow'>
        <span class='${ID}__shippingText'>Total</span>
        <span class='${ID}__shippingValue'>${formatPrice(grandTotal)}</span>
      </div>
    </div>`;

    if (document.querySelector(`.${ID}__row`)) {
      document.querySelectorAll(`.${ID}__row`).forEach((el) => el.remove());
    }
    anchorPoint?.insertAdjacentHTML('afterend', htmlStr);
    anchorPoint2?.insertAdjacentHTML('afterend', htmlStr);
  });
};

export default () => {
  setup();

  init();

  //fire on form submit
  document.addEventListener('submit', (e) => {
    if (e.target.closest('form')) {
      pollerLite(['.rebuy-cart__flyout-content.has-items'], () => {
        //console.log('form submitted');
        init();
      });
    }
  });

  const configObj = {
    childList: true,
    subtree: false,
    attributes: true,
    characterData: true,
    characterDataOldValue: true
  };
  observeDOM(
    'body',
    () => {
      init();
      pollerLite(['.rebuy-cart__flyout-content.has-items'], () => {
        init();
      });
    },
    configObj
  );
};
