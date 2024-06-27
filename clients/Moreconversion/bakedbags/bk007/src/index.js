import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['#slidecart-checkout-form'], () => {
  setTimeout(activate, 1500);
});
