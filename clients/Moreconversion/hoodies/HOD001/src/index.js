import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.product__info-wrapper variant-radios'], activate);
