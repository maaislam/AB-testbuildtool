import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (!ieChecks) {
  if (window.location.href.includes('products')) {
    pollerLite(['.ProductForm__Option .ColorSwatchList .HorizontalList__Item'], activate);
  } else if (window.location.href.includes('/collections')) {
    pollerLite(['.ProductItem__Wrapper'], activate);
  }
}
