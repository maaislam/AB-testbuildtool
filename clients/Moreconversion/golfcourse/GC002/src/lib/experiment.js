import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import searchElement from './components/searchElement';

const { ID, VARIATION } = shared;

const init = () => {
  const bannerSearchElement = document.querySelector('[data-context="search-page"]');
  const targetElement = document.querySelector('.green-bar-wrap');
  const targetElementParent = targetElement.closest('.shopify-section');

  if (!targetElementParent.querySelector(`.${ID}__search-section`)) {
    targetElementParent.insertAdjacentHTML('beforeend', searchElement(ID, bannerSearchElement));
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  if (VARIATION === 'control') return;

  init(); //
};
