import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { cardWrapper } from './components/cardWrapper';
import { bottomCardsData, topCardsData } from './data/data';

const { ID, VARIATION } = shared;

const init = () => {
  const container = document.querySelector('.single-page');
  const targetPoint = container.querySelector('#topplista');
  const { children } = container;

  //eslint-disable-next-line no-plusplus
  for (let i = 1; i < children.length; i++) {
    const child = children[i];
    if (child.id === 'topplista') break;
    if (!child.classList.contains(`${ID}__cardWrapper`)) {
      child.classList.add(`${ID}__hidden`);
    }
  }

  if (!document.querySelector(`.${ID}__cardWrapper`)) {
    targetPoint.insertAdjacentHTML('beforebegin', cardWrapper(ID, topCardsData, bottomCardsData));
  }
};

export default () => {
  setup(); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  let flag = false;
  const clickHandler = (e) => {
    const { target } = e;

    if (
      target.closest(`.${ID}__cardContainer`) &&
      !target.closest(`.${ID}__cta`) &&
      !target.closest(`${ID}__footer-links`)
    ) {
      //eslint-disable-next-line no-unused-vars
      flag = true;
      const clickedItem = target.closest(`.${ID}__cardContainer`);
      const button = clickedItem.querySelector(`.${ID}__cta`);
      if (button) button.click();
    }
    if (target.closest(`.${ID}__cta`)) {
      const clickedItem = target.closest(`.${ID}__cta`);
      const operatorName = clickedItem.getAttribute('data-operator');
      flag === true
        ? gaTracking(`${operatorName} | Top-Card`)
        : gaTracking(`${operatorName} CTO | Button | Top-Card`);
      flag = false;
    } else if (target.closest('.ad-image-wrapper') && target.closest(`.${ID}__miniCardContainer`)) {
      const clickedItem = target.closest('.ad-image-wrapper');
      const operatorName = clickedItem.getAttribute('data-operator');
      gaTracking(`${operatorName} CTO | Logo | Top-banner`);
    } else if (target.closest('.offer-title') && target.closest(`.${ID}__miniCardContainer`)) {
      const clickedItem = target.closest('.offer-title');
      const operatorName = clickedItem.getAttribute('data-operator');
      gaTracking(`${operatorName} CTO | Content | Top-banner`);
    } else if (target.closest('.upper-content')) {
      const clickedItem = target.closest('.upper-content');
      const operatorName = clickedItem.getAttribute('data-operator');
      gaTracking(`${operatorName} | Top-Banner`);
    } else if (target.closest('.block-link.hide-desktop') && target.closest('a')) {
      const clickedItem = target.closest('a');
      const operatorName = clickedItem.querySelector('img').alt;
      gaTracking(`${operatorName} | Top-Card`);
    } else if (target.closest('.block-link.hide-mobile') && target.closest('a')) {
      const clickedItem = target.closest('a');
      const operatorName = clickedItem.querySelector('img').alt;
      gaTracking(`${operatorName} | Top-Card`);
    } else if (target.closest('.operator-container') && target.closest('.logo-container')) {
      const clickedItem = target.closest('.logo-container');
      const operatorName = clickedItem
        .querySelector('[data-type="logo"]')
        .getAttribute('data-operator');
      gaTracking(`${operatorName} CTO | Logo | Toplist`);
    } else if (target.closest('.operator-container') && target.closest('a[data-type="button"]')) {
      const clickedItem = target.closest('a[data-type="button"]');
      const operatorName = clickedItem.getAttribute('data-operator');
      gaTracking(`${operatorName} CTO | Button | Toplist`);
    }
  };

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', clickHandler);
  }
  document.body.dataset[`${ID}__isListenerAdded`] = true;

  if (VARIATION === 'control') return;

  init();
};
