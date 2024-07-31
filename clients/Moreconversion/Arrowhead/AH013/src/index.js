import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body.template-product', '.product-single__meta', '.product-description'], activate);
