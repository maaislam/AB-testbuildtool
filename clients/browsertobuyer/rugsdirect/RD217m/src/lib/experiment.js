import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite, observeDOM } from './helpers/utils';
import fakeSearchWrapper from './components/fakeSearchWrapper';
import fakeSearchButton from './components/fakeSearchButton';

const { ID, VARIATION } = shared;

const init = () => {
  //Initialize your experiment code here
  //...
  const attachPoint = document.querySelector('.site-header .site-header-main');
  if (
    !document.querySelector(`.${ID}__fakeSearchWrapper`) &&
    (VARIATION === '1' || VARIATION === '4')
  ) {
    attachPoint.insertAdjacentHTML(
      'afterend',
      fakeSearchWrapper(ID, 'Search for colour, size or room')
    );
  }

  if (
    !document.querySelector(`.${ID}__fakeSearchButton`) &&
    (VARIATION === '2' || VARIATION === '5')
  ) {
    document
      .querySelector('.site-header-mobile-search-button')
      .insertAdjacentHTML('beforebegin', fakeSearchButton(ID));
  }
};

export default () => {
  setup();

  const trackGAEvent = (c, a, l) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'gaCustomEvent',
        eventCategory: c,
        eventAction: a,
        eventLabel: l
      });
      console.log('event tracked', c, a, l);
    }
  };

  document.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__fakeSearchWrapper`)) {
      if (VARIATION === '2' || VARIATION === '5') {
        document.querySelector('.mobile-nav-close')?.click();
      }
      document
        .querySelector(
          `.site-header-mobile-search-button:not(.${ID}__fakeSearchButton) .site-header-mobile-search-button--button`
        )
        ?.click();
    } else if (target.closest(`.${ID}__fakeSearchButton`)) {
      e.preventDefault();
      window.searchButtonClicked = true;
      document.querySelector('.site-header-menu-toggle')?.click();
      if (
        !document.querySelector(`.${ID}__fakeSearchWrapper`) &&
        (VARIATION === '2' || VARIATION === '5')
      ) {
        document
          .querySelector('.mobile-nav-panel .site-header-actions')
          ?.insertAdjacentHTML('afterbegin', fakeSearchWrapper(ID, 'Search'));
      }
    } else if (target.closest('.mobile-nav-close') || target.closest('.mobile-nav-overlay')) {
      window.searchButtonClicked = false;
      document.querySelector(`.${ID}__fakeSearchWrapper`)?.remove();
    }
  });

  const observerHandler = (mutation) => {
    const { addedNodes } = mutation;
    if (addedNodes.length > 0 && addedNodes[0].nodeName === 'DIV') {
      trackGAEvent('RD 217m', 'Search Click', '');
    }

    if (
      !document.querySelector(`.${ID}__fakeSearchButton`) &&
      (VARIATION === '2' || VARIATION === '5')
    ) {
      document
        .querySelector('.site-header-mobile-search-button')
        .insertAdjacentHTML('beforebegin', fakeSearchButton(ID));
    }
  };

  pollerLite(['#salesfire-search'], () => {
    observeDOM('#salesfire-search', observerHandler); //
  });
  if (VARIATION === 'control') return;

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init(); //
};
