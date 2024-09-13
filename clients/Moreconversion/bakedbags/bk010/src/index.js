import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  ['.hydrated', 'body.template-product', '.ast-container .ast-vd-options', '#AddToCartForm'],
  () => {
    setTimeout(activate, 2000);
  }
);
