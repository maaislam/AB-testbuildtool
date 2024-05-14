import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['[data-role="priceBox"]'], () => {
  setTimeout(activate, 1500);
});
