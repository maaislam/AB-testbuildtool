import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.items-in-cart .title', '.content.minicart-items .product-item .product-item-name', () => typeof window.checkoutConfig === 'object'], activate);
