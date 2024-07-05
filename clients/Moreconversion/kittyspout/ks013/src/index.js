import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body.template-product',
    '.product-slideshow.flickity-enabled',
    () => typeof Flickity === 'function'
  ],
  activate
);
