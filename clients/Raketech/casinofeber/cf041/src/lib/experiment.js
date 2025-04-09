import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { cardWrapper } from './components/cardWrapper';
import { bottomCardsData, topCardsData } from './data/data';
import { onUrlChange, pollerLite } from './helpers/utils';

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

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    console.log(target.closest('.upper-content'), 'clicked');
    if (target.closest('.cta-button') && target.closest(`.${ID}__cardContainer`)) {
      const clickedItem = target.closest('.cta-button');
      const operatorName = clickedItem.getAttribute('data-operator');
      gaTracking(`${operatorName} CTO | Button | Top Banner`);
    } else if (target.closest('.ad-image-wrapper') && target.closest(`.${ID}__miniCardContainer`)) {
      const clickedItem = target.closest('.ad-image-wrapper');
      const operatorName = clickedItem.getAttribute('data-operator');
      gaTracking(`${operatorName} CTO | Logo | Top-banner`);
    } else if (target.closest('.external-link') && target.closest(`.${ID}__miniCardContainer`)) {
      const clickedItem = target.closest('.external-link');
      const operatorName = clickedItem.getAttribute('data-operator');
      gaTracking(`${operatorName} CTO | Button | Top-banner`);
    } else if (target.closest('.upper-content')) {
      const clickedItem = target.closest('.upper-content');
      const operatorName = clickedItem.getAttribute('data-operator');
      gaTracking(`${operatorName} | Card`);
    } else if (target.closest('.block-link.hide-desktop') && target.closest('a')) {
      const clickedItem = target.closest('a');
      const operatorName = clickedItem.querySelector('img').alt;
      gaTracking(`${operatorName} | Top Banner`);
    } else if (target.closest('.block-link.hide-mobile') && target.closest('a')) {
      const clickedItem = target.closest('a');
      const operatorName = clickedItem.querySelector('img').alt;
      gaTracking(`${operatorName} | Top Banner`);
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
  });
  if (VARIATION === 'control') return;

  init();
};
