import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (!ieChecks && window.location.pathname === '/power/search') {
  pollerLite(['body', '#myform', '.step-no', '.Glimp002__forms-inner'], activate);
}
