import activate from './lib/experiment';
import isTodayHoliday from './lib/helpers/holidays';
import { pollerLite } from './lib/helpers/utils';

if (window.location.href.includes('&QA=true') || isTodayHoliday()) {
    pollerLite(['footer'], activate);
}
