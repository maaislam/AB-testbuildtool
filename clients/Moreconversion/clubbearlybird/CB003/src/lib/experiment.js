import setup from './services/setup';
import shared from './shared/shared';
import { getDiscountText, observeDOM } from './helpers/utils';
import priceWrapper from './components/priceWrapper';
import productTag from './components/productTag';

const { ID } = shared;

const renderPriceWrapper = () => {
  const mainPriceContainer = document.querySelector('.zpa-product-price');
  const targetPoint = mainPriceContainer.querySelector('.zpa-product-price .zpa-el-product-price');
  const discountedPriceElem = targetPoint.querySelector('span[data-zp-product-discount-price]');
  const discountedPrice = discountedPriceElem ? discountedPriceElem.innerText : '';
  const sellPriceElement = mainPriceContainer.querySelector('[data-zp-product-price]');
  const sellPrice = sellPriceElement ? sellPriceElement.innerText : '';
  const savingAmount = getDiscountText(sellPrice, discountedPrice);

  const selectedInput = document.querySelector('.zpa-product-option__input:checked');
  const value = selectedInput ? selectedInput.value.split('-')[1] : '';

  const addToCartBtn = document.querySelector('.zpa-add-to-cart-btn');

  if (addToCartBtn && value) {
    addToCartBtn.querySelector(
      '.zpa-btn-custom__caption'
    ).innerHTML = `ADD TO CART <span class="${ID}__perMessage">- ${value}</span> >`;
  }

  console.log(discountedPrice, sellPrice, savingAmount);
  if (document.querySelector(`.${ID}__price-wrapper`)) {
    document.querySelector(`.${ID}__price-wrapper`).remove();
  }
  savingAmount &&
    targetPoint.insertAdjacentHTML('afterend', priceWrapper(ID, sellPrice, savingAmount));
};

const init = () => {
  const targetPoint1 = document.querySelector(
    '#zpproductselector1-wrapper .zpa-dynamic-product__inner-row .zpa-flex--column:last-child .zpa-offset-bottom-xxs .zpa-column-content h4'
  );

  if (document.querySelector(`.${ID}__productTag`)) {
    document.querySelector(`.${ID}__productTag`).remove();
  }

  targetPoint1.insertAdjacentHTML('beforebegin', productTag(ID));

  renderPriceWrapper();
  observeDOM('.zpa-product-price span[data-zp-product-discount-price]', (mutation) => {
    console.log(mutation, 'mutation');
    renderPriceWrapper();
  });
};

export default () => {
  setup();
  init();
};
