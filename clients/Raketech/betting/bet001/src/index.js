import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname === '/') {
  pollerLite(['body', '#main>.card:first-child', '.current-picks-widget'], activate);
}
