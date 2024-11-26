import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import savings from './data/data';
//eslint-disable-next-line import/no-unresolved
import bestSellerElement from './components/bestSellerElement';
import newInElement from './components/newInElement';

const { ID, VARIATION } = shared;

const siteNavigationElementRender = () => {
  const siteNavigation = document.querySelector('.site-navigation');
  if (!siteNavigation.querySelector(`.${ID}__bestSellers`)) {
    siteNavigation
      .querySelector('ul > li:nth-child(2)')
      .insertAdjacentHTML('beforebegin', bestSellerElement(ID));
  }
  if (!siteNavigation.querySelector(`.${ID}__newIn`)) {
    siteNavigation
      .querySelector('ul > li:nth-child(2)')
      .insertAdjacentHTML('afterend', newInElement(ID));
  }
};

const addBadgeInCollectionPage = () => {
  const productsWrapper = document.querySelector('.productgrid--wrapper');
  const allProducts = productsWrapper.querySelectorAll('.productgrid--item');
  allProducts.forEach((product) => {
    const imageElement = product.querySelector('.productitem--image-link');
    if (!imageElement) return;
    const link = imageElement.href.split('products/')[1].toLowerCase();
    const starElement = product.querySelector('.star_container');

    const existingBadge = product.querySelector(`.${ID}__saleBadge`);
    const discount = savings[link];
    if (!existingBadge) {
      const badgeText = discount ? `SAVE ${discount}%` : 'SALE';
      starElement.insertAdjacentHTML(
        'beforeend',
        `<span class="${ID}__saleBadge">${badgeText}</span>`
      );
    }
  });
};

const init = () => {
  pollerLite(['.site-navigation'], () => {
    siteNavigationElementRender();
  });

  if (window.location.pathname.toLocaleLowerCase().includes('/collections/cheap-rugs')) {
    pollerLite(
      ['.template-collection', '.productgrid--wrapper', '.star_container .group-stars'],
      () => {
        addBadgeInCollectionPage();
      }
    );
  }
};

export default () => {
  setup(); //use if needed

  if (VARIATION === 'control') return; //

  init(); //use if needed
};
