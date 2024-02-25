import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.pkg-container a.onetime'], activate);
