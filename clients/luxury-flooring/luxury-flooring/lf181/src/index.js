import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.catalog-product-view'], activate);
