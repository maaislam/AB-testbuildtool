import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (!ieChecks) {
  pollerLite(
    [
      'body',
      '#productCatalog',
      '#selectedCatalog .selecter-selected',
      '.fe-card-show',
      '#pageSizeSelector',
      () =>
        window.headerData &&
        window.headerData.userEmail === 'test_newrelic_mi@yopmail.com' &&
        (window.headerData.user.account_id === 'FRB2B190325133147' ||
          window.headerData.user.rootorg_id === 'MATI20210608085950')
    ],
    activate
  );
}
