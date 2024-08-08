import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.custom-swatch-label .custom-checkbox'], activate);
