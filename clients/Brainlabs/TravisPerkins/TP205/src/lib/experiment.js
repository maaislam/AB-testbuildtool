import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { observeDOM, obsIntersection } from '../../../../../../globalUtil/util';
import renderSeeAll from './components/seeAll';
import { pollerLite } from '../../../../../globalUtil/util';
import { validSearchUrls } from './helpers/validSearchUrls';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  setup('Experimentation', `TravisPerkins - ${ID}`);

  const intersectionConfigControl = {
    threshold: 0.3,
  };

  const interSectionCallbackControl = (entry) => {
    if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
      VARIATION != 'control' &&
        fireEvent(
          `Test ID: ${ID} Variation: ${VARIATION} Label: Customer sees “See Full Range” CTA`
        );
      fireEvent(`Test ID: ${ID} Variation: ${VARIATION} Label: Conditions Met`);
      entry.target.classList.add(`${ID}__seen`);
    }
  };

  obsIntersection(
    document.querySelectorAll('[data-test-id="product"]')[8],
    intersectionConfigControl,
    interSectionCallbackControl
  );
  // -----------------------------
  // If control, bail out from here
  // -----------------------------

  if (VARIATION == 'control') {
    return;
  }
  const seeAllClicked = !!document.querySelector(`.${ID}__seeall-clicked`);
  if (seeAllClicked) return;

  const totalProductOnpage = document
    .querySelector('[data-test-id="listing-header-count"]')
    .innerText.replace(/[^0-9]/g, '')
    .match(/(\d+)/)[0];

  //console.log(totalProductOnpage);

  //render new button
  const paginationWrapper = document.querySelector('[class^="Pagination__PaginationWrapper-"]');

  //const newBtnAnchor = document.querySelector(`[class^="PaginationButton__Wrapper-sc"]`);

  document.querySelectorAll(`.${ID}__seefullrange`).forEach((item) => {
    item.remove();
  });
  //render filter button for mobile only
  const controlFilterBtn = document.querySelector(`[data-test-id="listing-header-filter"]`);
  const newFilterBtn = controlFilterBtn.cloneNode(true);
  paginationWrapper?.classList.add(`${ID}__hide`);

  paginationWrapper?.insertAdjacentHTML('afterend', renderSeeAll(ID, totalProductOnpage));
  document
    .querySelector(`.${ID}__mobfilter-btn`)
    ?.insertAdjacentElement('afterbegin', newFilterBtn);

  //show first 9
  const prodCards = document.querySelectorAll('[data-test-id="product"]');
  const controlShowMoreBtn = !!document.querySelector('[data-test-id="pag-button"]');
  if (
    prodCards.length <= 8 &&
    controlShowMoreBtn &&
    !!document.querySelector(`.${ID}__seefullrange`)
  ) {
    controlShowMoreBtn.click();
  }
  prodCards.forEach((card, idx) => {
    if (idx <= 8) return;
    card.classList.add(`${ID}__hide`);
  });

  document.querySelector(`.${ID}__seefullrange`)?.addEventListener('click', (e) => {
    const target = e.target;
    if (target.matches(`.${ID}__seefullrange--btn`)) {
      fireEvent(
        `Test ID: ${ID} Variation: ${VARIATION} Label: Customer clicks a “See Full Range” CTA`
      );
      document.querySelector(`.${ID}__seefullrange`).remove();
      document.body.classList.add(`${ID}__seeall-clicked`);
      prodCards.forEach((card) => {
        card.classList.remove(`${ID}__hide`);
      });
    } else if (target.matches(`.${ID}__mobfilter-btn`) || target.closest(`.${ID}__mobfilter-btn`)) {
      controlFilterBtn?.click();
      fireEvent(
        `Test ID: ${ID} Variation: ${VARIATION} Label: Customer uses filter from the new Element`
      );
    }
  });
};

export default () => {
  setup('Experimentation', `TravisPerkins - ${ID}`);
  pollerLite(['#app-container', '[data-test-id="pag-button"]'], () => {
    // const plpListContainer = document.querySelector('[class^="PLPDesktop__PLPBody-sc-"]');
    const paginationWrapper = document.querySelector('footer');

    setTimeout(init, 2000);
    let oldHref = location.href;

    const mutationCallback = (mutation) => {
      const isTextMutation =
        mutation.target.nodeName == '#text' && mutation.oldValue !== mutation.target.textContent;
      const isValidSearchPage = validSearchUrls.some(
        (url) =>
          url == location.pathname + location.search ||
          url + '&pageLimit=20' == location.pathname + location.search
      );

      if ((location.href !== oldHref || isTextMutation) && isValidSearchPage) {
        oldHref = location.href;
        setTimeout(init, 2000);
      } else if (!isValidSearchPage) {
        const paginationWrapper = document.querySelector(
          '[class^="Pagination__PaginationWrapper-"]'
        );
        document.querySelectorAll(`.${ID}__seefullrange`).forEach((item) => {
          item.remove();
        });
        document.body.classList.remove(`${ID}__seeall-clicked`);
        paginationWrapper?.classList.remove(`${ID}__hide`);
      }
    };
    const mutationConfig = {
      childList: true,
      subtree: true,
      characterData: true,
      characterDataOldValue: true,
    };

    const intersectionConfig = {
      rootMargin: `500px`,
      threshold: 0,
    };

    const interSectionCallback = (entry) => {
      //console.log(entry);
      const seeAllClicked = !!document.querySelector(`.${ID}__seeall-clicked`);
      const isValidSearchPage = validSearchUrls.some(
        (url) =>
          url == location.pathname + location.search ||
          url + '&pageLimit=20' == location.pathname + location.search
      );

      if (entry.isIntersecting && seeAllClicked && isValidSearchPage) {
        document.querySelector('[data-test-id="pag-button"]')?.click();
      }
    };

    VARIATION != 'control' &&
      obsIntersection(paginationWrapper, intersectionConfig, interSectionCallback);

    observeDOM('#app-container', mutationCallback, mutationConfig);
  });
};
