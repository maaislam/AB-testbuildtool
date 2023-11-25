import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.product-form__cart-submit', 'ul.product-thumbnails__items .product-thumbnails__item img'], activate);
