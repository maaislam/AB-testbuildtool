import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeDOM, pollerLite, trackGA4Event } from './helpers/utils';

const { ID, VARIATION } = shared;

const captureElementsContainingString = (searchString) => {
  const elements = [...document.querySelectorAll('li')]; //Get all elements as an array

  return elements.filter((el) => el.textContent.includes(searchString));
};

const init = () => {};

export default () => {
  setup(); //use if needed
  //console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    console.log('enter', target);
    if (target.closest('#Search')) {
      document.body.classList.remove(`${ID}__positionChange`);
    } else if (target.closest('li') && target.closest(`.${ID}__listWrapper`)) {
      const clickedItem = target.closest('li');
      const searchValue = clickedItem.textContent.trim();
      trackGA4Event('Popular search click', 'Popular search click', searchValue);
    }
  });

  if (VARIATION === 'control') return;

  init();

  const mobileInputElement = document.querySelector(
    'form[action="/search"] input:not(#HeaderSearch)'
  );
  mobileInputElement.addEventListener('focus', () => {
    document.body.classList.add(`${ID}__positionChange`);
  });

  observeDOM('[js-search-modal="results"]', (mutation) => {
    const isPopularSearchesExist = captureElementsContainingString('Popular searches');
    if (isPopularSearchesExist.length > 0) {
      const searchWrapper = isPopularSearchesExist[0].closest('ul');
      if (!searchWrapper.querySelector(`.${ID}__listWrapper`)) {
        isPopularSearchesExist[0].insertAdjacentHTML(
          'afterend',
          `<div class="${ID}__listWrapper"></div>`
        );

        const allLists = searchWrapper.querySelectorAll('li');
        allLists.forEach((list) => {
          if (list !== isPopularSearchesExist[0]) {
            document
              .querySelector(`.${ID}__listWrapper`)
              .insertAdjacentElement('beforeend', list.cloneNode(true));
          }
        });
      }
    }
  });
};
