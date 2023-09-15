import setup from './services/setup';

import shared from './shared/shared';
import { extractNumberFromString, pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const isPdp = () => document.body.classList.contains('catalog-product-view');
const isPlp = () =>
  document.body.classList.contains('catalog-category-view') ||
  document.body.classList.contains('catalogsearch-result-index');

const newPrice = (id, priceObj) => {
  const { oldPrice, finalPrice, discount } = priceObj;
  const htmlStr = `
    <div class="${id}__newprice-wrapper">
      <div class="${id}__discountbadge ${VARIATION !== '1' ? `${id}__hide` : ''}">
        <span>Save ${discount}%</span>
      </div>
      <div class="${id}__prices">
        <div class="${id}__oldprice"><span class="${
    VARIATION === '1' ? `${id}__hide` : ''
  }">was</span> <span>£${oldPrice}m²</span></div>
        <div class="${id}__newprice">£${finalPrice}m²</div>
      </div>
      <div class="${id}__discountbadge ${VARIATION === '1' ? `${id}__hide` : ''} v2">
        <span>Save ${discount}%</span>
      </div>
    </div>
  `;
  return htmlStr;
};

const calcDiscount = (oldPrice, finalPrice) =>
  Math.round(((oldPrice - finalPrice) / oldPrice) * 100);

const init = () => {
  if (isPdp()) {
    pollerLite(['.product-info-price'], () => {
      setup();
      document.body.classList.add(`${ID}__pdp`);
      const priceWrapper = document.querySelector('.product-info-price');
      const finalPriceElement = priceWrapper.querySelector(
        '.final-price .price-including-tax .price'
      );
      const oldPriceElement = priceWrapper.querySelector('.old-price .price-including-tax .price');

      const oldPrice = extractNumberFromString(oldPriceElement.innerText);
      const finalPrice = extractNumberFromString(finalPriceElement.innerText);
      const discount = calcDiscount(oldPrice, finalPrice);

      const priceObj = {
        oldPrice,
        finalPrice,
        discount
      };

      if (document.querySelector(`.${ID}__newprice-wrapper`)) return;

      //const anchorPoint = priceWrapper.querySelector('.price-box');
      priceWrapper.classList.add(`${ID}__hide`);

      priceWrapper.insertAdjacentHTML('beforebegin', newPrice(ID, priceObj));

      const clonedPerPackPrice = document
        .querySelector('.flooring-price-pack-price')
        .cloneNode(true);

      const discountBadgeV2 = document.querySelector(`.${ID}__discountbadge.v2`);
      discountBadgeV2.insertAdjacentElement('beforebegin', clonedPerPackPrice);

      console.log('🚀 oldPrice:', oldPrice);
      console.log('🚀 finalPrice:', finalPrice);
      console.log('🚀 discount:', discount);
    });
  } else if (isPlp()) {
    pollerLite(['.products'], () => {
      setup();
      document.body.classList.add(`${ID}__plp`);
      const products = document.querySelectorAll('.products .product-item');
      products.forEach((product) => {
        const oldPriceElement = product.querySelector('.price-box>.old-price .price');
        if (!oldPriceElement) return;
        const finalPriceElement = product.querySelector('[data-price-type="finalPrice"] .price');
        const oldPrice = extractNumberFromString(oldPriceElement.innerText);
        const finalPrice = extractNumberFromString(finalPriceElement.innerText);
        const discount = calcDiscount(oldPrice, finalPrice);
        const attachPoint = product.querySelector('.price-box');

        const priceObj = {
          oldPrice,
          finalPrice,
          discount
        };

        if (product.querySelector(`.${ID}__newprice-wrapper`)) return;

        attachPoint.classList.add(`${ID}__hide`);
        attachPoint.insertAdjacentHTML('beforebegin', newPrice(ID, priceObj));
      });
    });
  }
};

export default () => {
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  init();
};
