import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';
import { validSearchUrls } from './lib/helpers/validSearchUrls';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);
const isValidSearchPage = validSearchUrls.some((url) => url == location.pathname + location.search);
if (!ieChecks) {
  pollerLite(['body'], () => {
    isValidSearchPage && activate();
  });
}
