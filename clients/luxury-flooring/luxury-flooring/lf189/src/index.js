import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body.catalog-product-view', '.fp-calculator #product-addtocart-button'], activate);
pollerLite(
  [
    'body.checkout-cart-index #shopping-cart-table',
    () => window.location.pathname === '/checkout/cart/'
  ],
  activate
);
