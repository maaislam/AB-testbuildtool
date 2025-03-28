import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeDOM, onUrlChange, pollerLite } from './helpers/utils';
import subsButton from './components/subsButton';
import oddsData from './data/data';

const { ID, VARIATION } = shared;

const captureElementsContainingString = (searchString) => {
  const elements = [...document.querySelectorAll('p')]; //Get all elements as an array

  return elements.filter((el) => el.textContent.includes(searchString));
};
const renderSubsButton = () => {
  const noOddsElements = captureElementsContainingString('No odds available');
  if (noOddsElements.length > 0) {
    noOddsElements.forEach((noOddsElement) => {
      const parentElement = noOddsElement.closest('button[type="button"]');
      const firstTeamNameElem = parentElement.querySelector('p.MuiTypography-body1.mui-1iglbju');
      const secondTeamNameElem = firstTeamNameElem ? firstTeamNameElem.nextElementSibling : '';
      const firstTeamName = firstTeamNameElem ? firstTeamNameElem.textContent : '';
      const secondTeamName = secondTeamNameElem ? secondTeamNameElem.textContent : '';
      const selectedDateElement = document.querySelector(
        'button[id^="day-events-tab"].Mui-selected'
      );
      const dateNum = selectedDateElement ? selectedDateElement.textContent.trim() : '';

      const isAvaiableOdds = oddsData.find(
        (odd) =>
          odd.firstTeam.toLowerCase().trim() === firstTeamName.toLowerCase().trim() &&
          odd.secondTeam.toLowerCase().trim() === secondTeamName.toLowerCase().trim() &&
          odd.dateNumber === dateNum
      );

      const noOddsWrapper = noOddsElement.closest('.MuiBox-root');
      noOddsWrapper.parentElement.classList.add(`${ID}__buttonWrapper`);
      noOddsWrapper.classList.add(`${ID}__noOddsWrapper`);

      if (isAvaiableOdds && isAvaiableOdds.oddsAvailable) {
        noOddsWrapper.classList.add(`${ID}__hidden`);
        const subscribeButton = noOddsWrapper.nextElementSibling;
        if (subscribeButton) {
          subscribeButton.remove();
        }
        noOddsWrapper.insertAdjacentHTML('afterend', subsButton(ID, isAvaiableOdds));
      } else {
        const noOddsWrapperTextElement = noOddsWrapper.querySelector('p');
        if (noOddsWrapperTextElement) {
          noOddsWrapperTextElement.textContent = 'Odds coming soon';
        }
      }
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
      e.preventDefault();
      //e.stopPropagation();
      const clickedItem = target.closest(`.${ID}__subsLink`);
      const link = clickedItem.href;
      const { operator } = clickedItem.dataset;
      gaTracking(`${operator} | Manual Odds Click`);
      window.open(link, '_blank');
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
