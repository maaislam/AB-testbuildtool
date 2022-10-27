import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (!ieChecks) {
  pollerLite(
    [
      '.product-info-main',
      '#product-addtocart-button',
      '.minicart-items-wrapper',
      '.mage-dropdown-dialog'
    ],
    activate
  );
}
