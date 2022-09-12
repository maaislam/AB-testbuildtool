import activate from './lib/experiment';
import { pollerLite, isPDP, isPLP } from './lib/helpers/utils';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (!ieChecks && (isPDP || isPLP || !!document.querySelector('.ProductListWrapper'))) {
    pollerLite(['body'], activate);
}