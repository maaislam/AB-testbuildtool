import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const validCategories = [
  '/solid-wood-flooring.html',
  '/engineered-wood-flooring.html',
  '/laminate-flooring.html',
  '/vinyl-flooring.html',
  '/parquet-flooring.html',
  '/special-offers.html'
];

pollerLite(
  [
    '.catalog-product-view',
    '.products.wrapper.products-grid',
    () =>
      validCategories.some((validCategory) =>
        document.querySelector(`.breadcrumbs a[href*="${validCategory}"]`)
      )
  ],
  activate
);
