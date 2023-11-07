import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['b .pdps1cTextSec:not(.onlyMobileView)'], activate);
