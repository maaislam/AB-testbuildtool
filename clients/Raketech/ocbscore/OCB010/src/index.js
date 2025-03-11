import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['nav > div:last-child'], activate);
