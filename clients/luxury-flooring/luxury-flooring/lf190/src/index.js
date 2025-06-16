import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body.catalog-product-view', '#details-toggle + .product-detail-col-list'], activate);
