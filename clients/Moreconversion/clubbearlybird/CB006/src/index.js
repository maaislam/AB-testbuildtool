import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '#cart-products-wrapper .cart-product'], activate);
