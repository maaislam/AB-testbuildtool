import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['#container-main div[data-qaid="product-grid"]'], activate);
