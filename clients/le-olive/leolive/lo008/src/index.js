import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body.template-product',
    'form[id^="product_form"]',
    () => window.langify.locale.iso_code === 'en' || window.langify.locale.iso_code === 'nl'
  ],
  activate
);
