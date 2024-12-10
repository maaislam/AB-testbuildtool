import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname.includes('/net-admin/')) {
  pollerLite(['.entry-content'], activate);
}
