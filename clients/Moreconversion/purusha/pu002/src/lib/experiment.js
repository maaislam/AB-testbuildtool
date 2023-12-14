import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup(); //use if needed

  const reviewsContainer = document.querySelector('[data-oke-container]');
  const reviewsBlock = reviewsContainer.closest('[id^="shopify-block-"]');

  if (!reviewsBlock) return;

  const priceBlock = document.querySelector('.ProductMeta__PriceList');
  priceBlock.parentElement.classList.add(`${ID}__priceblock-wrapper`);

  priceBlock.insertAdjacentElement('afterend', reviewsBlock);
};
