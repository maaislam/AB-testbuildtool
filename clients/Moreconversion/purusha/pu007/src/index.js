import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['#section-header .Header__Wrapper'], activate);
