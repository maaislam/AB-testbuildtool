import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  ['.upcart-header-text', () => typeof window.upcartCheckoutListeners !== 'undefined'],
  () => {
    setTimeout(activate, 500);
  }
);
