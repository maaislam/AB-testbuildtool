import pricesFilter from './components/pricesFilter';
import typesFilters from './components/typesFilters';
import { addHashToUrl } from './helpers/utils';

import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const { priceFilters, typeFilters, bannerData } = window.AG114Data;
  console.log('🚀 ~ file: experiment.js:10 ~ init ~ priceFilters:', priceFilters);
  const priceFilterAnchor = document.querySelector('.FacetContainer > li:first-child');
  if (!document.querySelector(`.${ID}__pricesfilter`)) {
    priceFilterAnchor.insertAdjacentHTML('afterend', pricesFilter(ID, priceFilters));
  }
  const typeFilterAnchor = document.querySelector('.ProductListHeading');
  if (!document.querySelector(`.${ID}__typefilter`)) {
    typeFilterAnchor.insertAdjacentHTML('beforebegin', typesFilters(ID, typeFilters, bannerData));
    typeFilterAnchor.insertAdjacentHTML('beforebegin', pricesFilter(ID, priceFilters));
  }
  const userClickedViewAll = sessionStorage.getItem('viewAll');
  if (userClickedViewAll) {
    //hide carousel
    const carousel = document.querySelector(`.${ID}__typefilter-block`);
    carousel.classList.add(`${ID}__hide`);
  }
};

export default () => {
  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__pricefilter`)) {
      const parentElem = target.closest(`.${ID}__pricefilter`);
      const { filterurl } = parentElem.dataset;
      const encodedHash = `PriceRange=${encodeURIComponent(filterurl)}`;
      addHashToUrl(encodedHash);
      console.log('Customer clicks a price filter');
      window.location.reload();
    } else if (target.closest(`.${ID}__typefilter`) && target.closest('[data-filter="View All"]')) {
      console.log('Customer clicks the “view all” filter');
      sessionStorage.setItem('viewAll', true);
    } else if (
      target.closest(`.${ID}__typefilter`) &&
      !target.closest('[data-filter="View All"]')
    ) {
      console.log('Customer clicks a category filter');
    }
  });
};
