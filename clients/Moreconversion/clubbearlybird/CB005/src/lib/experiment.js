import setup from './services/setup';
import shared from './shared/shared';
import { observeDOM } from './helpers/utils';
import promoShippingBanner from './components/promoShippingBanner';
import promoMessage from './components/promoMessage';

const { ID } = shared;

const formatPrice = (price) => {
  //If the price has no fractional part, format without cents
  if (price % 1 === 0) {
    return `$${price.toFixed(0)}`; //No decimals, just the whole dollar amount
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price); //Format with cents
};

const subtractPrices = (originalPrice, subtractValue) => {
  //Perform the subtraction
  const result = originalPrice - subtractValue;
  return formatPrice(result);
};

const startExperiment = () => {
  const cartItems = document.querySelectorAll('#cart-products-wrapper .cart-product');

  const isEnableForFreeShipping = Array.from(cartItems).some((item) =>
    item
      .querySelector('.product-variant')
      ?.textContent?.toLowerCase()
      .includes('45 serving starter kit')
  );

  const targetPoint = document.querySelector('.content-cart');
  const shippingElement = document.querySelector('.shipping-calculate');

  if (document.querySelector(`.${ID}__wrapper`)) {
    document.querySelectorAll(`.${ID}__wrapper`).forEach((el) => el.remove());
  }

  if (cartItems.length === 0) return;

  if (isEnableForFreeShipping) {
    console.log('show free shipping banner');

    targetPoint.insertAdjacentHTML('beforebegin', promoShippingBanner(ID));
    document.querySelector(`.${ID}__wrapper`).insertAdjacentElement('afterbegin', shippingElement);
    return;
  }

  const isEnableForSamplePack = Array.from(cartItems).some((item) =>
    item
      .querySelector('.product-variant')
      ?.textContent?.toLowerCase()
      .includes('6 serving sample pack')
  );

  if (isEnableForSamplePack) {
    console.log('show sample pack banner');
    //const targetProduct = document.querySelector('li.cart-product[data-item="43974239977713"]');
    //const priceElement = targetProduct ? targetProduct.querySelector('.price') : null;
    //const price = priceElement ? priceElement.textContent.trim().split('$')[1] : '';
    //console.log(price, 'price');

    //const remainingPrice = subtractPrices(68.0, parseFloat(price));
    targetPoint.insertAdjacentHTML('beforebegin', promoMessage(ID));
    document.querySelector(`.${ID}__wrapper`).insertAdjacentElement('afterbegin', shippingElement);
    return;
  }
  shippingElement && targetPoint.insertAdjacentElement('beforebegin', shippingElement);
};

const init = () => {
  startExperiment();
  observeDOM('#cart-products-wrapper > ul.list-products', (mutation) => {
    const { type } = mutation;
    if (type === 'childList') {
      startExperiment();
    }
  });
};

export default () => {
  setup();
  init();
};
