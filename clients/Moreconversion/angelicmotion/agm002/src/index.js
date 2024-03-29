import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname.includes('/products/')) {
  pollerLite(['.rio-options', '.product-form__buttons'], activate);
}
