import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { obsIntersection, observeDOM, isPDP } from './helpers/utils';
import banner from './components/banner';
import { doorSkus } from './data';

const { ID, VARIATION } = shared;

const init = () => {
  if (!isPDP()) return;
  //check if valid door PDP
  const productSkuElem = document.querySelector('[data-test-id="product-code"]');
  const prodDku = productSkuElem?.innerText.match(/\d+/)[0];

  const isDoorSku = (sku) => doorSkus.includes(sku);

  if (document.querySelector(`.${ID}__banner`) || !isDoorSku(prodDku)) return;

  if (sessionStorage.getItem('doorVisualiserBanner') !== 'true') {
    gaTracking('Conditions Met');
    gaTracking('User lands on PDP');
    sessionStorage.setItem('doorVisualiserBanner', 'true');
  }

  if (document.referrer.includes('http://travisperkins.doorvisualiser.com/')) {
    gaTracking('User returns to PDP after being on door visualiser');
  }

  const anchorElem =
    document
      .querySelector('[data-test-id="address-select-wrapper"]')
      .closest('[class^="PDPStyles__Section-sc"]') ||
    document.querySelector('[data-test-id="delivery-and-branch-selectors-block"]');

  if (VARIATION !== 'control') {
    anchorElem.insertAdjacentHTML('beforebegin', banner(ID));
  }

  const intersectionHandler = (entry, observer) => {
    if (entry.isIntersecting) {
      gaTracking('User sees Door Visualiser Banner');
      //console.log('Conditions Met');
      observer.disconnect();
    }
  };

  obsIntersection(anchorElem, 0.3, intersectionHandler);
};

export default () => {
  setup();

  //add event listener
  //const appContainer = document.getElementById('app-container');
  document.body.addEventListener('click', ({ target }) => {
    if (target.matches(`.${ID}__banner--link`)) {
      gaTracking('User clicks on door visualiser CTA');
    } else if (
      (target.closest('[data-test-id="add-to-delivery-btn"]') ||
        target.closest('[data-test-id="add-to-collection-btn"]')) &&
      !target.closest('button').getAttribute('disabled')
    ) {
      gaTracking('User adds products to bag');
    }
  });
  sessionStorage.removeItem('doorVisualiserBanner');
  init();

  const mutationCallback = () => {
    init();
  };

  //const appContainer = document.getElementById('app-container');

  observeDOM('#app-container', mutationCallback, ID);
};
