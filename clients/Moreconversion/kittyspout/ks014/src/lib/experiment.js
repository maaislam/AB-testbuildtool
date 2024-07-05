import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('div[id^="ProductSection-template"]');
  const frequentlyBoughtSecton = document
    .querySelector('.cbb-frequently-bought-container')
    .closest('.shopify-section');
  frequentlyBoughtSecton.classList.add(`${ID}__frequetlyBought`);
  frequentlyBoughtSecton.querySelector('.color-.gradient').classList.add('page-width');
  const mightAlsoLikeSection = document
    .querySelector('.featured-collection-fix')
    .closest('.shopify-section');
  mightAlsoLikeSection.classList.add(`.${ID}__mightLikeAlso`);
  targetPoint.insertAdjacentElement('afterend', frequentlyBoughtSecton);
  document
    .querySelector(`.${ID}__frequetlyBought`)
    .insertAdjacentElement('afterend', mightAlsoLikeSection);
};

export default () => {
  setup();
  if (VARIATION === 'control') return;

  init(); //
};
