import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);
const pageToSelectorConfig = {
  '/pricing/': '.pricing-columns',
  '/plans-comparison/': '.pricing-table-v2--table',
  '/bullet/upgrade': '#pricing_plans'
};

if (!ieChecks) {
  pollerLite(['body', `${pageToSelectorConfig[window.location.pathname]}`], activate);
}
