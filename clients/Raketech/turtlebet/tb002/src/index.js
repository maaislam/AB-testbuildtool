import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.mui-19udz37'], () => {
  setTimeout(activate, 2000);
});
