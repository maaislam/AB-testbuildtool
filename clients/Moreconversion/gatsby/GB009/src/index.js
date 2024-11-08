import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.essential_countdown_annoucement_bar_wrapper'], activate);
