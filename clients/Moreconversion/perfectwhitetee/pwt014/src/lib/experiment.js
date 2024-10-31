import setBlondie from './helpers/setBlondie';
import setNewArrivals from './helpers/setNewArrivals';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const collectionHideDelay = 1000;
  const essentialsElem = document.querySelector('a[href="/collections/essentials"].skrim__link');
  const essentialsShopifySection = essentialsElem.closest('.shopify-section');

  const shopEssentiasBtn = document.querySelector('.btn--inverse[href="/collections/essentials"]');
  const blondieShopifySection = shopEssentiasBtn.closest('.shopify-section');

  setNewArrivals(ID, essentialsShopifySection, collectionHideDelay);
  setBlondie(ID, blondieShopifySection, collectionHideDelay);
};

export default () => {
  setup();
  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__newArrivalsViewAll`)) {
      target.closest(`.${ID}__newArrivalsViewAll`).remove();

      const newArrivalGrids = document.querySelectorAll(`.${ID}__newArrivals .grid-product`);
      newArrivalGrids.forEach((grid) => {
        grid.classList.remove(`${ID}__hide`);
      });
    } else if (target.closest(`.${ID}__blondieViewAll`)) {
      target.closest(`.${ID}__blondieViewAll`).remove();

      const blondieGrids = document.querySelectorAll(`.${ID}__blondie .grid-product`);
      blondieGrids.forEach((grid) => {
        grid.classList.remove(`${ID}__hide`);
      });
    }
  });
};
