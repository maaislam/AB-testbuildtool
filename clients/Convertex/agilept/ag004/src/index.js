import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.vc_section > div.vc_row > .vc_column_container'], activate);
