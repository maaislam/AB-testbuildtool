import progressBar from './components/progressBar';
import getCart from './helpers/getCart';
import setDiscount from './helpers/setDiscount';

import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const attachPoint = document.querySelector('.upcart-rewards');

  const cartData = getCart();

  cartData.then((data) => {
    const { item_count } = data;

    if (item_count === 0) return;

    const messageText =
      item_count < 2
        ? 'You’re 1 Item(s) away from get 20% Discount!'
        : "You've unlocked one item free!";
    const barWidth = item_count === 0 ? 0 : item_count === 1 ? 50 : 100;
    const discountCode = 'abtestbuy2get20%';
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
        window.upcartRegisterAddToCart();
      });
    }
  });
};

export default () => {
  setup();

  init();

  //observeDOM('.upcart-header-text', init);
  //for checking if cart updated
  window.upcartOnCartUpdated = init;
};
