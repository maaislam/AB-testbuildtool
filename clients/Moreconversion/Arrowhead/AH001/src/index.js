import activate from './lib/experiment';
import { isValidUrl, pollerLite } from './lib/helpers/utils';

if (isValidUrl(window.location.href)) {
  pollerLite(['.product-description'], activate);
}
