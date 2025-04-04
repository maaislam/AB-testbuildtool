import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite([
    '#category-view-container',
    () => document.querySelectorAll('.product_addtocart_form button[aria-haspopup="dialog"]').length > 0
], activate);
