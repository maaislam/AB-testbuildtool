import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.rebuy-cart__progress-bar-container'], activate);
