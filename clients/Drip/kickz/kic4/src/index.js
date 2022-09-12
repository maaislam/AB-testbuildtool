import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';
import { isCartPage, isCheckoutPage } from './lib/helpers/pageTypes';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);
const elemToPollFor = isCheckoutPage
    ? '#checkout-main'
    : isCartPage
    ? '[data-tau="start_checkout_bottom"]'
    : 'body';
if (!ieChecks) {
    pollerLite(['body', elemToPollFor], activate);
}
