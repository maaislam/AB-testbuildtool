import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);
const isMobile = window.DY.deviceInfo.type === 'smartphone';
const itemToPoll = `[data-item-id="${isMobile ? 'catalog' : 'nextButGroup'}"]`;
if (!ieChecks) {
  pollerLite(['body', itemToPoll, () => window.PDP_MANAGER], () => {
    activate();
  });
}
