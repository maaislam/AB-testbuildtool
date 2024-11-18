import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body.template-product', '.baby__product-price'], activate);
