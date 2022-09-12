import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (!ieChecks) {
  if (document.querySelector('.ProductForm__AddToCart')) {
    pollerLite(['.ProductForm__AddToCart', '.HorizontalList__Item [data-action="open-drawer"]', '.Header__FlexItem--fill a.Header__Icon[data-action="open-drawer"]'], activate);
  } else if (document.querySelector('.HorizontalList__Item [data-action="open-drawer"]')) {
    pollerLite(['.HorizontalList__Item [data-action="open-drawer"]'], activate);
  } else {
    pollerLite(['.Header__FlexItem--fill a.Header__Icon[data-action="open-drawer"]'], activate);
  }
}
