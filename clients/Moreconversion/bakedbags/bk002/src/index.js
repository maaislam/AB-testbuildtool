import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  ['body.template-product', '.productpage-section .shopify-product-form .productpage-right-title'],
  activate
);
