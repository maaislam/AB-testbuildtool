import progressBar from './components/progressBar';
import getCart from './helpers/getCart';
import setDiscount from './helpers/setDiscount';

import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = (data) => {
  const attachPoint = document.querySelector('.upcart-rewards');

  const { item_count } = data;

  if (item_count === 0) return;

  const messageText =
    item_count < 2
      ? 'You’re 1 Item(s) away from get 20% Discount!'
      : "You've unlocked one item free!";
  const barWidth = item_count === 0 ? 0 : item_count === 1 ? 50 : 100;
  const discountCode = 'buy2get20percentoff';
  const discountCodeBadge = document.querySelector('.upcart-discount-code-badge');

  const htmlStr = `<div class='${ID}__container'>
      <p class='${ID}__message'>${messageText}</p>
      ${progressBar(ID, barWidth)}
    </div>`;

  if (document.querySelector(`.${ID}__container`)) {
    document.querySelector(`.${ID}__container`).remove();
  }
  attachPoint.insertAdjacentHTML('beforebegin', htmlStr);

  if (item_count > 1 && !discountCodeBadge) {
    setDiscount(discountCode).then(() => {
      setTimeout(() => {
        window.upcartRegisterAddToCart();
      }, 1000);
    });
  }
};

export default () => {
  setup();

  getCart().then((cartData) => {
    init(cartData);
  });

  //observeDOM('.upcart-header-text', init);
  //for checking if cart updated
  window.upcartOnCartUpdated = (cart) => {
    console.log('cart updated', cart);
    setTimeout(() => {
      init(cart);
    }, 1000);
  };
};
