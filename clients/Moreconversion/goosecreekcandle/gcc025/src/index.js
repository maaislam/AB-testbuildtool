import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.product-recommendations-wrapper', () => typeof window.rebuyRecommended === 'object'], activate);
