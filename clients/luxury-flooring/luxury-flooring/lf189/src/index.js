import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite([() => typeof window.require === 'function'], () => {
  window.require(['Magento_Customer/js/customer-data'], (customerData) => {
    customerData.invalidate(['cart']); //Mark the cart data as stale
    customerData.reload(['cart'], true); //Force reload from server
  });
});

pollerLite(['body.catalog-product-view', '.fp-calculator #product-addtocart-button'], activate);
pollerLite(
  [
    'body.checkout-cart-index #shopping-cart-table',
    () => window.location.pathname === '/checkout/cart/'
  ],
  activate
);

if (window.location.pathname === '/checkout/') {
  pollerLite([() => window.location.href.includes('#shipping')], () => {
    if (!window.sessionStorage.getItem('hasSeenCheckout')) {
      window.location.reload();
      window.sessionStorage.setItem('hasSeenCheckout', true);
    }
  });
}
