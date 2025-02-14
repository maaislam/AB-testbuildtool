import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body.template-product', '.shopify-section[id*="__product-recommendations"]'], () =>
  setTimeout(activate, 1000));
