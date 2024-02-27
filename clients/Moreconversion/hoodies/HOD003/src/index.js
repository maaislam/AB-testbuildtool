import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  ['.product__info-container .product-form form[action="/cart/add"] .product-form__submit'],
  activate
);
