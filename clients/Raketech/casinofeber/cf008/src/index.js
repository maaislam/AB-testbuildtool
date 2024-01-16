import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite([() => document.querySelectorAll('.toplist.casino .toplist-item .toplist-pros')], () => {
  setTimeout(activate, 1000);
});
