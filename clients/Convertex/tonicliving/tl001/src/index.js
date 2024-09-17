import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '#main-nav .navigation__tier-1-container'], activate);
