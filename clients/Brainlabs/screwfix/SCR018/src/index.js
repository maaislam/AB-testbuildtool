import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';
import { validSkus } from './lib/data';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (!ieChecks) {
  pollerLite(
    [
      'body',
      '.pr__infobox',
      () => validSkus.some((sku) => window.location.pathname.includes(sku.toLowerCase()))
    ],
    activate
  );
}
