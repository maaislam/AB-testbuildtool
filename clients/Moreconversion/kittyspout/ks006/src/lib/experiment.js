import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const anchorPoint = document.querySelector('.shopify-section.section');
  const catDrinkingWater = document.querySelectorAll(
    '.shopify-section .index-section .feature-row-wrapper'
  )[2];
  catDrinkingWater.classList.add(`${ID}__catDrinkingWater`);

  if (anchorPoint && catDrinkingWater) {
    const catDrinkingWaterSection = catDrinkingWater.closest('.shopify-section');
    catDrinkingWaterSection.classList.add(`${ID}__catDrinkingWaterSection`);
    anchorPoint.insertAdjacentElement('afterend', catDrinkingWaterSection);
  }
};

export default () => {
  setup(); //use if needed

  init();
};
