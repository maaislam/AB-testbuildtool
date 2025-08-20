import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.entry-content ol li a[href*="/l/list"]'], activate);
