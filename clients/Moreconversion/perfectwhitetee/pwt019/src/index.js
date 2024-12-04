import activate from './lib/experiment';
import isTodayHoliday from './lib/helpers/holidays';
import { pollerLite } from './lib/helpers/utils';

if (isTodayHoliday()) {
    pollerLite(['footer'], activate);
}
