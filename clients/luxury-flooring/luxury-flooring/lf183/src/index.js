import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body.page-products', '.products-grid'], activate);
