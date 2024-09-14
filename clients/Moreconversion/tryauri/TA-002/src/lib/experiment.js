import setup from './services/setup';
import shared from './shared/shared';
import bundleWrapper from './components/bundleWrapper';

const { ID, VARIATION } = shared;

const init = () => {
  const mainProductInfo = document.querySelector(
    '.shopify-section[id*="custom-product-template"] .ntg-product-main-info'
  );

  const existingProductBundle = document.querySelector(
    '.custom-product-bundle ul.ntg-offer-list > li:last-child'
  );

  const sellPrice = existingProductBundle?.querySelector('.ntg-current-price')?.textContent;
  const comparePrice = existingProductBundle?.querySelector('.ntg-old-price')?.textContent;

  const data = {
    title: 'Super Mushroom Elixir Full Bundle',
    subHeader: '4 Elixirs For Complete Wellbeing',
    imgSrc:
      'https://cdn.shopify.com/s/files/1/0589/9760/4409/files/Lion_sMane5xBundle.png?v=1724748372',
    sellPrice,
    comparePrice
  };

  if (!document.querySelector(`.${ID}__bundleWrapper`)) {
    mainProductInfo.insertAdjacentHTML('beforeend', bundleWrapper(ID, data));
  }
};

export default () => {
  setup();

  if (VARIATION === 'Control') return;

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__bundleWrapper-button`)) {
      const existingProductBundle = document.querySelector(
        '.custom-product-bundle ul.ntg-offer-list > li:last-child'
      );
      console.log(existingProductBundle);

      existingProductBundle?.querySelector('input[type="submit"]').click();
    }
  });

  init();
};
