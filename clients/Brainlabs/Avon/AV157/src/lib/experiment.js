import { mutationObserver, obsIntersection, pollerLite } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  if (document.querySelector('.ProductListHeading .ProductListPaging a.PageNumber').classList.contains('Active')) {
    console.log(`${ID}-${VARIATION} is added!!!`);
    const productLists = document.querySelectorAll('.ProductList .ProductListCell');
    const attachPoint = VARIATION === '1' ? productLists[11] : (VARIATION === '2' && productLists[4]);
    const firstElem = productLists[0];
    firstElem.classList.add(`${ID}__firstElem`);

    attachPoint.insertAdjacentElement('afterend', firstElem);
  } else {
    const htmlClassLists = document.documentElement.classList;
    htmlClassLists.contains(`${ID}__mutated`) && htmlClassLists.remove(`${ID}__mutated`);
  }
};

export default () => {
  setup();
  init();

  const callback = (mutations) => {
    const htmlClassLists = document.documentElement.classList;
    const isPageOne = document.querySelector('.ProductListHeading .ProductListPaging a.PageNumber').classList.contains('Active');
    const isSelectorFired = mutations[0].target.classList.contains('ProductList');
    const isMutated = htmlClassLists.contains(`${ID}__mutated`);

    if (isSelectorFired && !isMutated && isPageOne) {
      setTimeout(() => {
        init();
      }, 250);
      htmlClassLists.add(`${ID}__mutated`);
    } else if (!isPageOne && isMutated) {
      htmlClassLists.remove(`${ID}__mutated`);
    }
  };

  const config = {
    attributes: true,
    childList: false,
    characterData: false,
    characterDataOldValue: false,
    subtree: false
  };
  mutationObserver('.ProductList', callback, config);

  const intersectionCallback = (entry) => {
    if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
      entry.target.classList.add(`${ID}__seen`);
      console.log('Conditions Met');
      //fireEvent('User seen', shared);
    }
  };

  pollerLite([`.${ID}__firstElem`], () => {
    const elem = document.querySelector(`.${ID}__firstElem`);
    obsIntersection(elem, 0.5, intersectionCallback);
  });
};
