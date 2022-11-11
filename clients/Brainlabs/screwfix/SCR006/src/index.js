import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

import shared from './lib/shared/shared';
import getCompareCount from './lib/helpers/getCompareCount';

const { ID } = shared;

//const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (window.location.pathname.includes('/p/')) {
  pollerLite(['body'], activate);
} else if (window.location.search.includes('action=compare')) {
  const setHref = () => {
    const comparePlpUrl = `${window.location.origin}${window.location.pathname}`;
    pollerLite(['#breadcrumb_compare_top', '#go_back_button_top'], () => {
      const breadCrumb = document.getElementById('breadcrumb_compare_top').closest('a');
      const listingBtn = document.getElementById('go_back_button_top');

      [breadCrumb, listingBtn].forEach((item) => {
        item.setAttribute('href', comparePlpUrl);
        console.log(item.getAttribute('href'));
      });
    });
  };
  setHref();
  if (window.location.search.includes('action=compare') && document.referrer.includes('/p/')) {
    getCompareCount().then((data) => {
      console.log(data);
      pollerLite(
        [
          () =>
            document.querySelectorAll('[id^="compare_page_remove_product_from_list_"]').length ===
            data * 1
        ],
        () => {
          document
            .querySelectorAll('[id^="compare_page_remove_product_from_list_"]')
            .forEach((removeBtn) => {
              if (removeBtn.id.includes(sessionStorage.getItem(`${ID}__selectedforcompare`))) {
                return;
              }
              removeBtn.click();
            });
          //setHref();
          window.location.reload();
        }
      );
    });
  }
}
