import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';
import shared from './lib/shared/shared';

const { ID } = shared;

if (window.location.href.includes('qa=true') && !document.documentElement.classList.contains(ID)) {
  pollerLite(
    [
      'body.template-product',
      'form[id^="product_form"]',
      () => window.langify.locale.iso_code === 'en' || window.langify.locale.iso_code === 'nl'
    ],
    activate
  );
}
