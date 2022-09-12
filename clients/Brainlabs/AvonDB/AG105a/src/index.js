import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (!ieChecks) {
  pollerLite(['body', '.catalogue-cover', '#main_container', '#logo_container'], () => {
    if (window.location.pathname.includes('.html')) {
      return;
    }

    activate();
  });
}
