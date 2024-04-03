import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname === '/products/custom-american-dream-card') {
  window.location.href = 'https://socialcultureart.com/products/american-dream-card-2';
} else if (window.location.pathname === '/products/american-dream-card-2') {
  pollerLite(['.upcart-footer'], activate);
}
