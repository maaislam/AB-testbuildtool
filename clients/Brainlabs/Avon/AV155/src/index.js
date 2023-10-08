import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['header .first-level .second-level li'], activate);
