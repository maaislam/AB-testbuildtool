import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname.includes('/artikel') || window.location.pathname.includes('/tips')) {
  pollerLite(['body', '.card-block-border-mockup'], activate);
}
