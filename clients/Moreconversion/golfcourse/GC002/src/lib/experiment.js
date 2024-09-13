import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import searchElement from './components/searchElement';
import button from './components/button';

const { ID, VARIATION } = shared;

const init = () => {
  const bannerSearchElement = document.querySelector('[data-context="search-page"]');
  const targetElement = document.querySelector('.green-bar-wrap');
  const targetElementParent = targetElement.closest('.shopify-section');
  const targetElementForButton = document.querySelector('.hero__link .animation-cropper');
  const mainParent = targetElementForButton.closest('.shopify-section');
  mainParent.classList.add(`${ID}__targetedSection`);

  if (!targetElementParent.querySelector(`.${ID}__search-section`)) {
    targetElementParent.insertAdjacentHTML('beforeend', searchElement(ID, bannerSearchElement));
  }

  if (!document.querySelector(`.${ID}__buttonV1`) && VARIATION === '1') {
    targetElementForButton.insertAdjacentHTML('afterend', button(ID, VARIATION));
  }

  if (!document.querySelector(`.${ID}__buttonsWrapper`) && VARIATION === '2') {
    targetElementForButton.insertAdjacentHTML('afterend', button(ID, VARIATION));
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  if (VARIATION === 'control') return;

  init(); //
};
