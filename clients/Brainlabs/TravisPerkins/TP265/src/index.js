import activate from './lib/experiment';
import { navItemUrlSelector } from './lib/helpers/navItemUrlSelector';
import { pollerLite } from './lib/helpers/utils';

pollerLite([navItemUrlSelector], activate);
