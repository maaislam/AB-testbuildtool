import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname.includes('/products')) {
  pollerLite(['.product-single__additional-actions'], activate);
}
