import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.custpro .product.mob-name-cust', '[data-th="Type product"]'], activate);
