import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body.template-product',
    () => document.querySelectorAll('#MainContent > .shopify-section')[1],
    () => window.Shopify && window.Shopify.currency && window.Shopify.currency.active === 'USD'
  ],
  activate
);
