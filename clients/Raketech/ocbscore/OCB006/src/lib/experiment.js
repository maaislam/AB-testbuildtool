import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const mainCard = document.querySelectorAll('[aria-labelledby*="match-event-tab"]');
  mainCard.forEach((card) => {
    const mainCardTitleElement = card.querySelector('.MuiTypography-body1');
    const description = mainCardTitleElement ? mainCardTitleElement.nextElementSibling : '';
    console.log(description, 'description');
    if (description && description.classList.contains('MuiStack-root')) {
      description.classList.add(`${ID}__description`);

      if (!card.querySelector(`.${ID}__text`)) {
        description.insertAdjacentHTML(
          'afterend',
          `<span class="${ID}__text">Hide all Prediction</span>`
        );
      }
    }
  });
  const bettingsTipsItems = document.querySelectorAll(
    '.MuiGrid-container.mui-isbt42 .MuiGrid-item'
  );
  bettingsTipsItems.forEach((item) => {
    const description = item.querySelector('.MuiCardContent-root > p.MuiTypography-body2');
    if (description && !item.querySelector(`.${ID}__text`)) {
      description.classList.add(`${ID}__description`);
      description.insertAdjacentHTML(
        'afterend',
        `<span class="${ID}__text">Read all BETTING TIP</span>`
      );
    }
  });
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (
      target.closest(`.${ID}__text`) &&
      target.closest('.OCB005__bettingItem'`.OCB005__bettingItem:not(${ID}__show`)
    ) {
      const clickedItem = target.closest(`.${ID}__text`);
      const bettingItem = target.closest('.OCB005__bettingItem');
      bettingItem.classList.add(`${ID}__show`);
      clickedItem.textContent = 'Hide all BETTING TIP';
    }
  });
  if (VARIATION === 'control') return; //

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init();
};
