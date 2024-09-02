import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.modal-filter [data-bind="scope: \'room_suitabilityFilter\'"]'], activate);
