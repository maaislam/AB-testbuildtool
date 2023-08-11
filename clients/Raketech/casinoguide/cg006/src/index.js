import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname.includes('/natcasino')) {
  pollerLite(['body', () => typeof window.gtag === 'function'], activate);
}
