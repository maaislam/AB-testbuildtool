import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '[id*="dialogue-product-recommendations"]'], () => {
  setTimeout(activate, 2000);
});
