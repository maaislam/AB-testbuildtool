import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';
import setup from './lib/services/setup';

if (window.location.pathname.includes('/collections')) {
    setup();
    pollerLite(['#CollectionAjaxResult'], activate);
}
