import activate from './lib/experiment';
import activatePdp from './lib/experimentPdp';
import { pollerLite } from '../../../../../globalUtil/util';

if (window.location.pathname.includes('/c/')) {
  pollerLite(['body', '#sticky-right-content', () => window.ga !== undefined], activate);
} else if (window.location.pathname.includes('/p/')) {
  pollerLite(['body', '.pr__product', () => window.ga !== undefined], activatePdp);
}
