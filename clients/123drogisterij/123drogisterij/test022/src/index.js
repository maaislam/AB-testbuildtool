import productTypes from './data/data';
import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body.catalog-product-view',
    '.product.media',
    '[data-th="Type product"]',
    () => {
      const productTypeElement = document.querySelector('[data-th="Type product"]');
      const productType = productTypeElement ? productTypeElement.textContent.trim() : '';
      return productTypes.some((item) => item.toLowerCase() === productType.toLowerCase());
    }
  ],
  activate
);
