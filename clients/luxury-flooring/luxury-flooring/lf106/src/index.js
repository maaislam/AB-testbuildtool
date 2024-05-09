import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.usps-main'], activate);
