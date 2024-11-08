import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  ['body', 'div[data-product-block="title"]', 'div[data-product-block="product_sibling"]'],
  activate
);
