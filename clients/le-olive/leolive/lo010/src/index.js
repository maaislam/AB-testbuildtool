import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body.template-product', '#CartCount', '.product-single__form-banner'], activate);
