import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['[data-operator="Mr Vegas Casino"]'], () => {
  setTimeout(activate, 1000);
});
