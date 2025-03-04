import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '#join_pkg .join_package_box', '.summary-overview'], activate);
