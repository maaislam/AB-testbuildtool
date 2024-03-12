import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body.catalog-product-view', '#product-addtocart-button1'], activate);
