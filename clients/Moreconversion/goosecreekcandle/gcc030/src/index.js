import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '#main-navigation-wrapper', '.mobile-menu'], activate);
