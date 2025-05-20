import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '#zpproductselector1-wrapper', '.zpa-product-price'], activate);
