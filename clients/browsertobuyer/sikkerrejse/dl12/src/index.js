import activate from './lib/experiment';
import activateGlobal from './lib/global';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body'], activateGlobal);

pollerLite(
  ['body', () => window.location.search.includes('?s='), 'main#content .page-content'],
  activate
);
