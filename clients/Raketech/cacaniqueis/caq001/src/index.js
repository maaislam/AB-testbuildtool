import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body .section.section_top'], activate);
