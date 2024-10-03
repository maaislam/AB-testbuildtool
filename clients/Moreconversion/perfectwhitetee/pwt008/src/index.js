import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body',
    '#slidecarthq .slidecarthq',
    () => window.Shopify && window.Shopify.currency && window.Shopify.currency.active === 'USD'
  ],
  activate
);
