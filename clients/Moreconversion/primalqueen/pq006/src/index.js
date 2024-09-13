import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['header', '.menu-drawer__navigation'], activate);
