import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const productRecommendation = document.querySelector(
    '.shopify-section[id*="__product-recommendations"]'
  );

  const recentlyViewed = document.querySelector('.shopify-section[id*="__recently-viewed"]');

  const textWithImage = document.querySelector('.shopify-section[id*="__text-and-image2"]');

  const targetElement =
    document.querySelector('.product-full-width') ||
    document.querySelector('wise-product-reviews').closest('section') ||
    document.querySelector('.shopify-section[id*="__background-image-text"]');

  targetElement &&
    productRecommendation &&
    targetElement.insertAdjacentElement('beforebegin', productRecommendation);

  targetElement &&
    productRecommendation &&
    targetElement.insertAdjacentElement('beforebegin', recentlyViewed);

  targetElement &&
    productRecommendation &&
    targetElement.insertAdjacentElement('beforebegin', textWithImage);

  pollerLite(['.return-link'], () => {
    const returnLink = document.querySelector('.return-link');
    const returnLinkWrapper = returnLink.closest('.shopify-section');
    returnLinkWrapper.classList.add(`${ID}__returnLinkWrapper`);
    const targetElem = textWithImage?.querySelector('.feature-row__text');
    targetElem && targetElem.insertAdjacentElement('beforeend', returnLinkWrapper);
  });
};

export default () => {
  setup();
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'Control') return;

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  init();
};
