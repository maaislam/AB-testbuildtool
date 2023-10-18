import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname.includes('/gift')) {
  pollerLite(['body', '.ProductListHeading'], activate);
}
