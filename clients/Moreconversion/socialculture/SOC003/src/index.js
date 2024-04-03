import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname === '/products/custom-american-dream-card') {
  window.location.href = 'https://socialcultureart.com/products/american-dream-card-2';
} else {
  pollerLite(['.upcart-footer'], activate);
}
