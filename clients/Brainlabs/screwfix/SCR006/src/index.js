import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

import shared from './lib/shared/shared';
//import getCompareCount from './lib/helpers/getCompareCount';

const { ID } = shared;

//const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (window.location.pathname.includes('/p/')) {
  pollerLite(['body'], activate);
}
