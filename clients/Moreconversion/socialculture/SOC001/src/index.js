import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.product-header1_layout template[x-for="(value, index) in colors"]'], () => {
  setTimeout(activate, 2000);
});
