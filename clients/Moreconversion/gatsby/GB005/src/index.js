import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.product-single__description img[data-mce-src]'], activate);
