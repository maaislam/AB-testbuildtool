import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body',
    () => window.location.pathname.includes('/opc/buy/checkout'),
    '.opc-checkout__main .opc-signup__main'
  ],
  activate
);
