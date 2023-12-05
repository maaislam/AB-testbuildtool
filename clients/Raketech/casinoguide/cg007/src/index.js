import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.mui-isbt42'], () => {
  setTimeout(activate, 1000);
});
