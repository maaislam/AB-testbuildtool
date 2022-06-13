import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { observeDOM, obsIntersection } from '../../../../../../globalUtil/util';
import renderSeeAll from './components/seeAll';
import { pollerLite } from './helpers/pollerLite';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  setup('Experimentation', `TravisPerkins - ${ID}`);

  const seeAllClicked = !!document.querySelector(`.${ID}__seeall-clicked`);
  if (seeAllClicked) return;

  //console.log(ID);
  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }

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

  paginationWrapper.classList.add(`${ID}__hide`);

  paginationWrapper.insertAdjacentHTML('beforebegin', renderSeeAll(ID, totalProductOnpage));

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
    if (!target.matches(`.${ID}__seefullrange--btn`)) return;
    fireEvent(
      `Test ID: ${ID} Variation: ${VARIATION} Label: Customer clicks a “See Full Range” CTA`
    );
    document.querySelector(`.${ID}__seefullrange`).remove();
    document.body.classList.add(`${ID}__seeall-clicked`);
    prodCards.forEach((card) => {
      card.classList.remove(`${ID}__hide`);
    });
  });
};

export default () => {
  setup('Experimentation', `TravisPerkins - ${ID}`);
  pollerLite(['#app-container', '[data-test-id="pag-button"]'], () => {
    const plpListContainer = document.querySelector('[class^="PLPDesktop__PLPBody-sc-"]');

    setTimeout(init, 2000);
    let oldHref = location.href;

    const mutationCallback = (mutation) => {
      const isTextMutation =
        mutation.target.nodeName == '#text' && mutation.oldValue !== mutation.target.textContent;
      if (location.href !== oldHref || isTextMutation) {
        setTimeout(init, 2000);
      }
    };
    const mutationConfig = {
      childList: true,
      subtree: true,
      characterData: true,
      characterDataOldValue: true,
    };

    const intersectionConfig = {
      rootMargin: `-400px 0px -400px 0px`,
      threshold: 0,
    };
    const intersectionConfigControl = {
      threshold: 0.3,
    };

    const interSectionCallback = (entry) => {
      const seeAllClicked = !!document.querySelector(`.${ID}__seeall-clicked`);

      if (!entry.isIntersecting && seeAllClicked) {
        document.querySelector('[data-test-id="pag-button"]').click();
      }
    };
    const interSectionCallbackControl = (entry) => {
      if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
        fireEvent(
          `Test ID: ${ID} Variation: ${VARIATION} Label: Customer sees “See Full Range” CTA`
        );
        entry.target.classList.add(`${ID}__seen`);
      }
    };

    obsIntersection(
      document.querySelectorAll('[data-test-id="product"]')[8],
      intersectionConfigControl,
      interSectionCallbackControl
    );
    obsIntersection(plpListContainer, intersectionConfig, interSectionCallback);

    observeDOM('#app-container', mutationCallback, mutationConfig);
  });
};
