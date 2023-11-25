import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite([() => document.querySelectorAll('.shg-category-grid')], activate);
