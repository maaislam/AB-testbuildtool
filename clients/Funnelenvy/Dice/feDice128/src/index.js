import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body#bodyId main'], activate);
