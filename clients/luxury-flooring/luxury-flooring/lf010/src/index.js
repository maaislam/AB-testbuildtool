import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.page-with-filter'], activate);
