import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', 'table.betting-sites-table'], activate);
