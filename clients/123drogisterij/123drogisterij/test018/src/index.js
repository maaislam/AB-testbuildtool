import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite([() => document.querySelectorAll('.cart.item .item-info').length > 0], activate);
