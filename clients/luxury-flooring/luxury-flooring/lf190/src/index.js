import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '#details-toggle + .product-detail-col-list'], activate);
