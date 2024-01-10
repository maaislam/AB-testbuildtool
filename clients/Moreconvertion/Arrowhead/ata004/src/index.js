import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body .product-description div[data-mce-fragment="1"]'], activate);
