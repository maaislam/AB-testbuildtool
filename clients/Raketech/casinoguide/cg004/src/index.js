import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname !== '/') {
  pollerLite(['#__next'], activate);
}
