import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.href.includes('qa=true')) {
    pollerLite(['body'], activate);
}
