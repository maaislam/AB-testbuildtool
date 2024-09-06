import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body.template-collection',
    '#CollectionAjaxContent > .grid',
    () => document.querySelectorAll('#CollectionAjaxContent > .grid > .grid__item').length
  ],
  () => setTimeout(activate, 2000)
);
