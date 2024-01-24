import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.personal-links-section .link-row a'], activate);
