import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeDOM, onUrlChange } from './helpers/utils';

const { ID, VARIATION } = shared;

const renderDom = () => {
  const casinoLists = document.querySelectorAll('.MuiBox-root.css-79elbk');
  casinoLists.forEach((casinoList) => {
    const controlReviewButtonElement = casinoList
      .querySelector('a[data-type="button"]')
      ?.cloneNode(true);
    controlReviewButtonElement.classList.add(`${ID}__casinoReviewLink`);
    controlReviewButtonElement.textContent = controlReviewButtonElement.textContent.toLowerCase();
    const targetPoint = casinoList.querySelector('.MuiBox-root.css-xjq0zv');
    if (!casinoList.querySelector(`.${ID}__casinoReviewLink`)) {
      targetPoint.insertAdjacentElement('afterend', controlReviewButtonElement);
    }
  });
};

const init = () => {
  if (window.location.pathname !== '/fi') return;
  setup();
  if (VARIATION === 'control') return;
  renderDom();
  const mainElement = document.querySelector('.MuiBox-root.css-yd8sa2');

  const isMutationAdded = mainElement.getAttribute(`${ID}__mutationAdded`);
  if (!isMutationAdded) {
    //eslint-disable-next-line no-return-assign
    observeDOM('.MuiBox-root.css-yd8sa2', renderDom);
  }
  mainElement.setAttribute(`${ID}__mutationAdded`, true);
};

export default () => {
  const isListenerAdded = document.body.getAttribute(`${ID}__isListenerAdded`);
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => {
      const { target } = e;
      if (target.closest(`.${ID}__casinoReviewLink`)) {
        const clickedItem = target.closest(`.${ID}__casinoReviewLink`);
        const { operator } = clickedItem.dataset;
        gaTracking(`${operator} CTR | Toplist-Card`);
      } else if (
        target.closest('a[data-type="button"]') &&
        target.closest('.MuiBox-root.css-79elbk')
      ) {
        const clickedItem = target.closest('a[data-type="button"]');
        const { operator } = clickedItem.dataset;
        const text = clickedItem.textContent.trim();
        if (text.toUpperCase() === 'KOKEILE KASINOA') {
          gaTracking(`${operator} CTO | Toplist-Card`);
        } else {
          gaTracking(`${operator} CTR | Toplist-Card`);
        }
      }
    });
  }

  document.body.setAttribute(`${ID}__isListenerAdded`, true);

  const experimentStart = () => {
    const intervalId = setInterval(() => {
      console.log('enter');
      init();
    }, 100);
    setTimeout(() => {
      clearInterval(intervalId);
    }, 10000);
  };

  experimentStart();

  onUrlChange(() => {
    experimentStart();
  });
};
