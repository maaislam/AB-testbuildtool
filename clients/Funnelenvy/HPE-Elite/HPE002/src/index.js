import plpChanges from './lib/pages/plpChanges';
import { pollerLite } from '../../../../../globalUtil/util';
import searchPageChanges from './lib/pages/searchPageChanges';
import pdpChanges from './lib/pages/pdpChanges';
import homePageChanges from './lib/pages/hpChanges';

//const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);
const searchPage = window.location.pathname.includes('/search');
const categoryPage = window.location.pathname.includes('/list');
const productPage = window.location.pathname.includes('/productDetails/details');
const homePage = window.location.pathname === '/';

pollerLite(
  [
    () =>
      window.reqOrgName !== 'MATINFO ECOMMERCE TESTS' &&
      window.userAccount !== 'MATINFO ECOMMERCE TESTS:FR' &&
      window.reqOrgName !== 'MATINFO SALES TESTS' &&
      window.userAccount !== 'MATINFO SALES TESTS:FR' &&
      window.userAccountId !== 'MATINFO2' &&
      window.headerData &&
      (window.headerData.user.account_id === 'FRB2B190325133147' ||
        window.headerData.user.rootorg_id === 'MATI20210608085950')
  ],
  () => {
    if (searchPage) {
      searchPageChanges();
    } else if (categoryPage) {
      plpChanges();
    } else if (productPage) {
      pdpChanges();
    } else if (homePage) {
      homePageChanges();
    }
  }
);
