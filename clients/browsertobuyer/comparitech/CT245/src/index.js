import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const { pathname } = window.location;

if (pathname.includes('/net-admin/')) {
    pollerLite(['.entry-content ol a[href*="/l/list"]', '#toc-widget-2 .box.promo'], activate);
}
