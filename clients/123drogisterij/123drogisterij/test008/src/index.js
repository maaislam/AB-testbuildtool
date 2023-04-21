import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (!ieChecks) {
  pollerLite(
    [
      'body.catalog-product-view',
      () => {
        return document.querySelectorAll('body .custom-child-upsel-checkbox').length > 1;
      }
    ],
    activate
  );
}
