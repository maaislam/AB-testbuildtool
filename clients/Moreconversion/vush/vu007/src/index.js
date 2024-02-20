import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['[data-section-type="quick-cart"]'], activate);
