import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body .product.product--medium .addcart:not(.addcartbox)'], activate);
