import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  ['body', () => window.location.pathname.includes('bonus/'), '#td-outer-wrap', '.fcrp-scfeatured'],
  activate
);
