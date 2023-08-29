import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname.includes('/match/')) {
  pollerLite(['.league-desc a[href="https://www.tvmatchen.nu/fotboll/"]'], activate);
}
