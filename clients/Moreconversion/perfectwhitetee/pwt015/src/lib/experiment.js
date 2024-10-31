import setEssentials from './helpers/setEssentials';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const collectionHideDelay = 1000;

  const harleyCollectionBtn = document.querySelector('.btn--secondary[href="/collections/harley"]');
  const harleyCollectionShopifySection = harleyCollectionBtn.closest('.shopify-section');
  const allHeadingTwo = document.querySelectorAll('h2');
  allHeadingTwo.forEach((headingTwo) => headingTwo.textContent.includes('seasonless') && headingTwo.textContent.includes('classic') && headingTwo.classList.add(`${ID}__hide`));

  harleyCollectionShopifySection.classList.add(`${ID}__hide`);

  const shopEssentiasBtn = document.querySelector('.btn--inverse[href="/collections/essentials"]');
  const shopEssentiasShopifySection = shopEssentiasBtn.closest('.shopify-section');
  setEssentials(ID, shopEssentiasShopifySection, collectionHideDelay);
};

export default () => {
  setup();
  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__essentialsViewAll`)) {
      target.closest(`.${ID}__essentialsViewAll`).remove();

      const essentialsGrids = document.querySelectorAll(`.${ID}__essentials .grid-product`);
      essentialsGrids.forEach((grid) => {
        grid.classList.remove(`${ID}__hide`);
      });
    }
  });
};
