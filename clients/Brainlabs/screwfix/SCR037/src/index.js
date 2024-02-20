import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['header div[data-qaid="header-bottom-merchArea-0"]'], activate);
