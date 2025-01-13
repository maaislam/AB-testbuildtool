import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.js.hydrated ', 'modal-opener'], activate);
