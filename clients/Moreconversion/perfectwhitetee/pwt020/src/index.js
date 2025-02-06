import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const targetedProducts = document.querySelectorAll('.product-single__meta .grid-product');
pollerLite(
  ['body.template-product', () => targetedProducts && targetedProducts.length > 0],
  activate
);
