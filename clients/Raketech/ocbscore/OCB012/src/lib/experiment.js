import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeDOM, onUrlChange, pollerLite } from './helpers/utils';
import subsButton from './components/subsButton';
import controlSubscribeBtn from './components/controlSubscribeBtn';

const { ID, VARIATION } = shared;

const captureElementsContainingString = (searchString) => {
  const elements = [...document.querySelectorAll('p')]; //Get all elements as an array

  return elements.filter((el) => el.textContent.includes(searchString));
};
const renderSubsButton = () => {
  const noOddsElements = captureElementsContainingString('No odds available');
  if (noOddsElements.length > 0) {
    noOddsElements.forEach((noOddsElement) => {
      const noOddsWrapper = noOddsElement.closest('.MuiBox-root');
      noOddsWrapper.parentElement.classList.add(`${ID}__buttonWrapper`);
      noOddsWrapper.classList.add(`${ID}__noOddsWrapper`);
      const subscribeButton = noOddsWrapper.nextElementSibling;
      if (subscribeButton) {
        subscribeButton.remove();
      }
      noOddsWrapper.insertAdjacentHTML('afterend', subsButton(ID));
    });
  }
};

const renderControlSubscribeButton = () => {
  if (document.querySelector(`.${ID}__controlSubcribe`)) {
    document.querySelector(`.${ID}__controlSubcribe`).remove();
  }

  document.querySelector('.mui-1nl0624').insertAdjacentHTML('afterend', controlSubscribeBtn(ID));
};

const clearABStorage = () => {
  Object.keys(localStorage)
    .filter((key) => key.startsWith('ab.storage'))
    .forEach((key) => localStorage.removeItem(key));
};

const init = () => {
  renderSubsButton();
  renderControlSubscribeButton();

  observeDOM('.MuiStack-root.mui-10kro7q', (mutation) => {
    const { addedNodes } = mutation;
    if (addedNodes.length > 0) {
      renderSubsButton();
    }
  });
};

export default () => {
  setup();
  const clickHandler = (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__subsButton`)) {
      e.preventDefault();
      e.stopPropagation();
      const clickedItem = target.closest(`.${ID}__subsButton`);
      const controlSubscribeBtnElem = document.querySelector(`.${ID}__controlSubcribe button`);
      clearABStorage();

      if (controlSubscribeBtnElem) controlSubscribeBtnElem.click();

      const wrapper = clickedItem.parentElement.parentElement;
      const firstTeam = wrapper.querySelector('p.mui-1iglbju');
      const secondTeam = wrapper.querySelector('p.mui-1iglbju + p.mui-1iglbju');
      const firstTeamName = firstTeam ? firstTeam.innerText : '';
      const secondTeamName = secondTeam ? secondTeam.innerText : '';

      gaTracking(`${firstTeamName} vs ${secondTeamName} | Subscribe To Update Button`);
    } else if (target.closest('[data-placement="odds-page"][data-type="button"]')) {
      const clickedItem = target.closest('[data-placement="odds-page"][data-type="button"]');
      const { operator } = clickedItem.dataset;
      gaTracking(`${operator} | Odds Click`);
    }
  };

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => clickHandler(e));
  }
  document.body.dataset[`${ID}__isListenerAdded`] = true;

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  if (VARIATION === 'control') return;

  init();

  onUrlChange(() => {
    pollerLite(['.MuiBox-root.mui-1smddtb', () => window.location.pathname === '/odds/'], () => {
      init();
    });
  });
};
