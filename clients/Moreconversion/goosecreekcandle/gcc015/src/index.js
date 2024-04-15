import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body.template-product', '.product-info-wrapper', '.mobile-info-container'], activate);
