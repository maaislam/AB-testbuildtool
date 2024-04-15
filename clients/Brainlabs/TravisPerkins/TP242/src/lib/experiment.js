/*eslint-disable no-param-reassign */
/*eslint-disable object-curly-newline */
/*eslint-disable function-paren-newline */
import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { pollerLite } from '../../../../../../globalUtil/util';
import deliveryMsg from './components/deliveryMsg';
import {
  getCustomerLocation,
  getEligibility,
  getItemData,
  isPDP,
  removeExisting
} from './helpers/utils';
import shared from './shared/shared';

const { ID, VARIATION } = shared;
const DOM_RERENDER_DELAY = 2000;

const init = async () => {
  //remove existing incase of re render
  removeExisting(`.${ID}__deliverymsg`);
  if (window.location.pathname === '/checkout' && VARIATION === '2') {
    pollerLite(['[data-test-id="slot-title"]'], () => {
      const slotTitles = document.querySelectorAll('[data-test-id="slot-title"]');
      slotTitles.forEach((slotTitle) => {
        slotTitle.innerText = 'Select your delivery day with confidence';
      });
    });
  }

  //run only in PDP
  if (!isPDP() || !getCustomerLocation()) return;

  //get data

  const eligibility = await getEligibility(getItemData(), getCustomerLocation());

  console.log(eligibility, getCustomerLocation(), getItemData());

  const anchorElem =
    document.querySelector('[data-test-id="product-detail"] [data-test-id="price"]') ||
    document.querySelector('[class^="ProductDetailMobile__PriceWr-sc"] [data-test-id="price"]');

  const { status, type } = eligibility[0].deliveryEligibility;

  //do not render incase status & type invalid
  if (status !== 'AVAILABLE' || type !== 'BRANCH') return;

  fireEvent('Conditions Met', shared);
  if (VARIATION === 'control') {
    return;
  }
  //render message
  removeExisting(`.${ID}__deliverymsg`);
  anchorElem.insertAdjacentHTML('afterend', deliveryMsg(ID));

  //css adjustments
  const bulkSavingBlock = document.querySelector(
    '[class^="ProductDetailDesktop__BulkSavingsWrapper-sc"]'
  );
  if (bulkSavingBlock && bulkSavingBlock.innerText === '') {
    bulkSavingBlock.classList.add(`${ID}__bulksaving--empty`);
  }
};

export default () => {
  setup('Experimentation', `TravisPerkins - ${ID}`, shared);
  setTimeout(init, DOM_RERENDER_DELAY);
  //Poll and re-run init
  pollerLite(['#app-container'], () => {
    const appContainer = document.querySelector('#app-container');
    let oldLocation = JSON.stringify(getCustomerLocation());
    let oldProductInfo = JSON.stringify(getItemData());
    let oldHref = window.location.href;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        //console.log(mutation);
        if (
          oldLocation !== JSON.stringify(getCustomerLocation()) ||
          oldProductInfo !== JSON.stringify(getItemData()) ||
          oldHref !== window.location.href
        ) {
          oldLocation = JSON.stringify(getCustomerLocation());
          oldProductInfo = JSON.stringify(getItemData());
          oldHref = window.location.href;

          setTimeout(init, DOM_RERENDER_DELAY);
        }
      });
    });

    const config = {
      childList: true,
      subtree: true,
      characterData: true
    };

    appContainer.addEventListener('click', ({ target }) => {
      if (target.closest('[data-test-id="add-to-delivery-btn"]')) {
        fireEvent('User interacts with Delivery CTA', shared);
      } else if (target.closest('[data-test-id="add-to-collection-btn"]')) {
        fireEvent('User interacts with Collection CTA', shared);
      }
    });

    observer.observe(appContainer, config);
  });
};
