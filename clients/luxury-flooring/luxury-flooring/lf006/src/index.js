import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (document.body.classList.contains('catalog-product-view')) {
    pollerLite(['.sp_accordion .trigger em'], activate);
}
