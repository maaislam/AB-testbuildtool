import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  ['body', () => window.location.search.includes('?s='), 'main#content .page-content'],
  activate
);