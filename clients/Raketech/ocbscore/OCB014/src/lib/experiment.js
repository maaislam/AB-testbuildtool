import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeDOM, onUrlChange, pollerLite } from './helpers/utils';
import subsButton from './components/subsButton';

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

const init = () => {
  renderSubsButton();

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
    if (
      target.closest('[data-placement="odds-page"][data-type="button"]') &&
      !target.closest(`.${ID}__subsButton`)
    ) {
      const clickedItem = target.closest('[data-placement="odds-page"][data-type="button"]');
      const { operator } = clickedItem.dataset;
      gaTracking(`${operator} | API Odds Click`);
    } else if (target.closest(`.${ID}__subsButton`) && target.closest(`.${ID}__subsLink`)) {
      //e.preventDefault();
      const clickedItem = target.closest(`.${ID}__subsLink`);
      const { operator } = clickedItem.dataset;
      gaTracking(`${operator} | Manual Odds Click`);
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
