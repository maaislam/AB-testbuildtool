import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.boost-sd__product-list', '.boost-sd__pagination'], activate);
