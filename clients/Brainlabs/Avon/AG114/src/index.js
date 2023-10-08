import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  ['body', '.FacetContainer > li:first-child', () => window.AG114Data !== undefined],
  activate
);
