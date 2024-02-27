import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.section.full.no-mobile:not(.sticky_show_after)'], activate);
