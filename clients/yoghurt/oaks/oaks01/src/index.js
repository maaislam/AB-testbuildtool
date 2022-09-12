import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';
import shared from './lib/shared/shared';

const { ID } = shared;
const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (!ieChecks) {
  if (window.location.pathname === '/en' || window.location.pathname === '/en/') {
    pollerLite(['.header-navbar'], activate);
  }else{
    pollerLite(['body'], activate);
  }
}
