import setup from './services/setup';
import shared from './shared/shared';
import { saleBadge } from './components/saleBadge';
import { sale } from './components/sale';

const { ID, VARIATION } = shared;

const insertSaleComponent = (element, elementForMobile) => {
  document.querySelectorAll(`li.${ID}__sale`).forEach((item) => {
    item.remove();
  });

  element.insertAdjacentHTML('beforeend', sale(ID));
  elementForMobile.insertAdjacentHTML('beforeend', sale(ID));
};
const init = () => {
  const compareAtPriceElements = document.querySelectorAll(
    '.product-info-wrapper .compare-at-price'
  );

  const hasDiscount = Array.from(compareAtPriceElements).some(
    (element) => !element.classList.contains('hide') && element.innerText.trim() !== ''
  );

  if (!hasDiscount) {
    return;
  }

  const targetelement = document.querySelector('.product-medias');
  const pricingElement = document.querySelector('.product-info-wrapper .product-page--pricing');
  const pricingElementMobile = document.querySelector(
    '.mobile-info-container .product-page--pricing'
  );

  if (document.querySelector(`.${ID}__saleBadge`)) {
    document.querySelector(`.${ID}__saleBadge`).remove();
  }

  VARIATION === '1'
    ? targetelement.insertAdjacentHTML('beforeend', saleBadge(ID))
    : insertSaleComponent(pricingElement, pricingElementMobile);
};
export default () => {
  setup(); //use if needed

  //eslint-disable-next-line no-useless-return
  if (VARIATION === 'control') return;

  init(); //use if needed
};
