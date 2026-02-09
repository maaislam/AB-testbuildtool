import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['input[name="capLower"]'], activate);
