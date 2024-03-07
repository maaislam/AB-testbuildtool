import { pollerLite } from './helpers/utils';
import setup from './services/setup';

//import shared from './shared/shared';

//const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  //check best seller

  pollerLite([() => window.bestSellingProducts && window.bestSellingProducts.length > 0], () => {
    window.bestSellingProducts.forEach((product) => {
      const productLinkElements = document.querySelectorAll(
        `a.indiv-product__link[href*="${product.handle}"]`
      );

      productLinkElements.forEach((el) => {
        console.log('product', el);
        const badge = document.createElement('span');
        badge.textContent = 'Best Seller';
        badge.classList.add('bestSeller');
        const productCard = el.closest('li');
        const badgeContainer = productCard.querySelector('.badgeContainer');
        badgeContainer.innerHTML = '';
        badgeContainer.appendChild(badge);
      });
    });
  });
};
