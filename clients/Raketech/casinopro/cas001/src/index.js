import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname === '/svenska-casinon/to/') {
  pollerLite(['body', '#__next', '#header-container'], activate);
}
