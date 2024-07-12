import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  ['body', '.collection-grid-wrapper > #CollectionProductGrid', 'ol.pagination'],
  activate
);
