import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.catalog-product-view', '.sp_accordion .trigger em'], activate);
