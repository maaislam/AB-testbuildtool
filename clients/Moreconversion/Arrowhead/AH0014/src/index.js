import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.add-to-cart'], activate);
