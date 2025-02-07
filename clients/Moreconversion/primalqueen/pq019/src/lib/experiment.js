import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import product from './components/product';

const { ID, VARIATION } = shared;

const renderAnotherProduct = (cartItems) => {
  const oneTimeProduct = Array.from(cartItems).filter((item) => {
    if (
      item.querySelector('.cart-item__name') &&
      item.querySelector('.cart-item__name').innerText.toLowerCase().includes('one time purchase')
    ) {
      return true;
    }
  });

  if (cartItems.length === 1 && oneTimeProduct.length) {
    const targetPoint = document.querySelector('.cart__footer .cart__blocks');
    const getProductData = JSON.parse(sessionStorage.getItem(`${ID}__data`));
    if (document.querySelector(`.${ID}__wrapper`)) {
      document.querySelector(`.${ID}__wrapper`).remove();
    }
    targetPoint.insertAdjacentHTML('beforebegin', product(ID, getProductData));
  }
};

const cartClickHandler = (e) => {
  const { target } = e;
  if (target.closest('.quantity__button') || target.closest('cart-remove-button')) {
    pollerLite(
      [
        '#main-cart-items:not(.cart__items--disabled) .cart-items',
        () =>
          document.querySelectorAll(
            '#main-cart-items:not(.cart__items--disabled) .cart-items .cart-item'
          ).length
      ],
      () => {
        const cartItems = document.querySelectorAll('#main-cart-items .cart-items .cart-item');
        renderAnotherProduct(cartItems);
      }
    );
  }
};

const cartInit = () => {
  pollerLite(
    [
      '#main-cart-items .cart-items',
      () => document.querySelectorAll('#main-cart-items .cart-items .cart-item').length > 0
    ],
    () => {
      document.body.classList.add(`${ID}__cartPage`);
      const cartItems = document.querySelectorAll('#main-cart-items .cart-items .cart-item');
      renderAnotherProduct(cartItems);

      document.body.removeEventListener('click', (e) => cartClickHandler(e));
      document.body.addEventListener('click', (e) => cartClickHandler(e));
    }
  );
};

const init = () => {
  //Your custom initialization logic goes here
  const { pathname } = window.location;
  if (pathname.includes('/cart')) {
    cartInit();
    return;
  }

  pollerLite(['.join_package_box'], () => {
    const targetConatiner = document.querySelector('.join_package_box');
    const packageBoxAtcButton = targetConatiner.querySelector('.package2 a.common_btn');
    packageBoxAtcButton.href = packageBoxAtcButton.href.replaceAll(
      'return_to=/checkout',
      'return_to=/cart'
    );

    const packageOne = targetConatiner.querySelector('.package1');
    const packageOneUrl = packageOne.querySelector('.common_btn').href;
    const packageOnePriceContainer = packageOne.querySelector('.price_text2');
    const packageOneComparePrice = packageOnePriceContainer.querySelector('span').textContent;
    const packageOneSellPrice =
      packageOnePriceContainer.querySelector('span').nextSibling.textContent;

    const data = {
      url: packageOneUrl,
      comparePrice: packageOneComparePrice,
      sellPrice: packageOneSellPrice
    };

    const clickHandler = (e) => {
      const { target } = e;
      if (target.closest('.package2 a.common_btn')) {
        sessionStorage.setItem(`${ID}__data`, JSON.stringify(data));
      }
    };

    document.body.removeEventListener('click', (e) => clickHandler(e));
    document.body.addEventListener('click', (e) => clickHandler(e));
  });
};
export default () => {
  setup();
  init();
};
