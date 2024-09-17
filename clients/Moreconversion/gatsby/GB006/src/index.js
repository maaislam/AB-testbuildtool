import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.variant-wrapper .grid__item'], activate);
