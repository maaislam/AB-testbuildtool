import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.quick-cart__container', '.quick-cart'], activate);
