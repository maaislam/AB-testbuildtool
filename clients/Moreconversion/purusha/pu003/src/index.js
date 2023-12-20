import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.ProductMeta__PriceList'], activate);
