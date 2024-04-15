import setup from './services/setup';

export default () => {
  setup();

  const priceContainer = document.querySelector('.product-page--pricing');
  const clonedPriceContainer = priceContainer.cloneNode(true);

  const attachpoints = document.querySelectorAll('[data-oke-star-rating]');
  console.log('🚀 ~ attachpoint:', attachpoints);

  console.log('🚀 ~ clonedPriceContainer:', clonedPriceContainer);
  clonedPriceContainer.classList.add('cloned-price-container');

  attachpoints.forEach((attachpoint) => {
    attachpoint.insertAdjacentElement('afterbegin', clonedPriceContainer);
  });
};
