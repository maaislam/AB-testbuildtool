import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.shopify-section--bordered .product_custom_section'], activate);
