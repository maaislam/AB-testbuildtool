import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);
// eslint-disable-next-line no-undef
//const isMobile = DY.deviceInfo.type === 'smartphone';
if (!ieChecks) {
  pollerLite(['body', '[data-item-id="wishlistButton"]', '#gdpr-cookie-button'], activate);
}
