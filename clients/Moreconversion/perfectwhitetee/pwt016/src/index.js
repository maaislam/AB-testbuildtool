import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname.includes('sock')) {
    pollerLite(['.product-main-slide[data-index="0"] .image-wrap'], activate);
}
