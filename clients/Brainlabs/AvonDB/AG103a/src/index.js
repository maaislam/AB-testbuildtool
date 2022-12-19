import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (!ieChecks) {
  pollerLite(
    ['body', '[data-item-id="wishlistButton"]', () => typeof window.DYO === 'object'],
    () => {
      if (window.V7.getABTestingBrochureMode().includes('first_look')) return;
      activate();
    }
  );
}
