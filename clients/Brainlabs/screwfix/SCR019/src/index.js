import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (
  !ieChecks &&
  window.location.pathname.includes('light-bulb') &&
  window.location.pathname.includes('/p/')
) {
  pollerLite(
    ['body', '.energyLabelArrow', '.pr__media', () => window.gtag !== undefined],
    activate
  );
}
