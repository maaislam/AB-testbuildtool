import activate from './lib/experiment';
import { checkTopThreeProvidersOrder, pollerLite } from './lib/helpers/utils';

if (checkTopThreeProvidersOrder()) {
    pollerLite(['.entry-content ol a[href*="/l/list"]'], activate);
}
