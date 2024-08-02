import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', 'header.section-features-2'], activate);
