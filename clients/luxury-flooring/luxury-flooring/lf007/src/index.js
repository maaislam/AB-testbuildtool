import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.product-add-form'], () => {
  setTimeout(activate, 1000);
});
