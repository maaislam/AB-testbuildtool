import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['[id*="featured_products"]'], activate);
