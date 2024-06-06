import setup from './services/setup';
import shared from './shared/shared';
import { savingAmount } from './components/savingAmount';

const { ID, VARIATION } = shared;
const regex = /\$([0-9]+(\.[0-9]+)?)/;

const calculateDiscount = (newPrice, oldPrice) => {
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
};

const insertDiscountElement = (element, elementForMobile, discount) => {
  const targetElement = element.querySelector('.product-page--pricing--variant-price');
  const targetElementForMobile = elementForMobile.querySelector(
    '.product-page--pricing--variant-price'
  );

  document.querySelectorAll(`li.${ID}__savingAmount`).forEach((item) => {
    item.remove();
  });

  targetElement.insertAdjacentHTML('afterend', savingAmount(ID, discount));
  targetElementForMobile.insertAdjacentHTML('afterend', savingAmount(ID, discount));
};

const init = () => {
  const pricingElement = document.querySelector('.product-info-wrapper .product-page--pricing');
  const pricingElementMobile = document.querySelector(
    '.mobile-info-container .product-page--pricing'
  );
  const newPrice = pricingElement
    .querySelector('.product-page--pricing--variant-price .money')
    .innerText.trim();
  const oldPrice = pricingElement
    .querySelector('.product-page--pricing--variant-compare-at-price .money')
    ?.innerText.trim();

  const modifiedNewPrice = newPrice.match(regex);
  const modifiedOldPrice = oldPrice?.match(regex);

  if (modifiedNewPrice && modifiedOldPrice) {
    document.body.classList.add(`${ID}__product-template`);
    const savePrice = calculateDiscount(modifiedNewPrice[1], modifiedOldPrice[1]);
    savePrice > 0 && insertDiscountElement(pricingElement, pricingElementMobile, savePrice);
  }
};
export default () => {
  setup(); //use if needed

  //eslint-disable-next-line no-useless-return
  if (VARIATION === 'control') return;

  init(); //use if needed
};
