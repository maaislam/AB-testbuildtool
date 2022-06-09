import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';

import { pollerLite } from '../../../../../../globalUtil/util';
import renderFloatingSelector from './components/floatingSelector';
import clickHandler from './helpers/clickHandler';
import { controlOptionsClickHandler } from './helpers/controlClickHandler';
import getProductData from './helpers/getProduct';
import obsIntersection from './helpers/observeIntersection';
import { excludedUrls, getCountry, langData } from './langData';

const ID = 'BLA-11';

const init = () => {
  const isExcludedUrl = excludedUrls.some((path) => path === location.pathname);
  const isSizeVariantPage = !!document.querySelector('[data-test-id="textOptions"]');
  if (location.pathname.indexOf('/products/') === -1 || isExcludedUrl || isSizeVariantPage) return;

  // Experiment Code...

  // -----------------------------
  // Add events that apply to both variant and control
  // @see https://app.gitbook.com/@userconversion/s/development/events/helpers/
  // -----------------------------
  // ...
  setup('Click', 'ATC');

  //handle dropdown close

  // -----------------------------
  // If control, bail out from here
  // -----------------------------

  // -----------------------------
  // Write experiment code here
  // -----------------------------
  // ...

  const productHandle = location.pathname.split('/products/')[1];
  const countryStr = getCountry();
  const laguageInfo = langData[countryStr];
  const token = laguageInfo.shopifyToken;
  // console.log(laguageInfo);
  // console.log('token', token);
  // console.log('countryStr', countryStr);

  getProductData(productHandle, token, countryStr).then((res) => {
    const data = res.data.product;
    if (!data.availableForSale) return;

    const findSelectedVariantIndex = () => {
      const optionSelected =
        document.querySelector('[data-test-id="textOptions"] .border-br-green') ||
        document.querySelector('[data-test-id="swatch"] .ring-2');
      if (optionSelected) {
        const parentElm =
          optionSelected.closest('[data-test-id="textOptions"]')?.parentElement ||
          optionSelected.closest('[data-test-id="swatch"]')?.parentElement;

        return Array.from(parentElm.children).indexOf(optionSelected.closest('div')) || 0;
      }
    };

    renderFloatingSelector(ID, data, laguageInfo, findSelectedVariantIndex());
    const floatingSelector = document.querySelector(`.${ID}__variantselector`);

    clickHandler(ID, floatingSelector, fireEvent);

    const intersectionCallback = (entry) => {
      const chatBubble = document.getElementById('chspt-cBubble');

      if (entry.isIntersecting) {
        //floatingSelector.classList.add(`${ID}__slide-out`);
        floatingSelector.classList.add(`${ID}__hide`);
        // timer = setTimeout(() => {}, 200);
        chatBubble && (chatBubble.style.bottom = '1rem');
        const dropdownOpen = !!document.querySelector('.dp-open');
        if (!dropdownOpen) return;
        document.querySelector('.variant-dp__title')?.click();
      } else {
        // clearTimeout(timer);
        floatingSelector.classList.remove(`${ID}__slide-out`);
        floatingSelector.classList.remove(`${ID}__hide`);
        floatingSelector.classList.add(`${ID}__slide-in`);
        chatBubble && (chatBubble.style.bottom = '10rem');
      }
    };

    const intersectionAnchor = document.querySelector('.conversion-area');

    intersectionAnchor &&
      obsIntersection(intersectionAnchor, { threshold: 0.1 }, intersectionCallback);
  });
};

export default () => {
  setup('Click', 'ATC');
  init();

  controlOptionsClickHandler(ID, init, fireEvent);

  // Poll and re-run init
  pollerLite(['#__nuxt'], () => {
    const appContainer = document.querySelector('#__nuxt');

    // ------------------------------------
    // Added Poller:
    // Checks for page changes and checks to see if the URL has changed
    // ------------------------------------
    let oldHref = location.href;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (oldHref != location.href && location.pathname.indexOf('/products/') !== -1) {
          oldHref = location.href;
          document.querySelector(`.${ID}__variantselector`)?.remove();
          setTimeout(() => {
            init();
            controlOptionsClickHandler(ID, init, fireEvent);
          }, 2000);
        } else if (oldHref != location.href && location.pathname.indexOf('/products/') === -1) {
          oldHref = location.href;
          document.querySelector(`.${ID}__variantselector`)?.remove();
        }
      });
    });

    const config = {
      childList: true,
      subtree: true,
    };

    observer.observe(appContainer, config);
  });
};
