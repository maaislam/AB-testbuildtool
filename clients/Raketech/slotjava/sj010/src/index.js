import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  ['body', () => window.location.pathname.includes('/slot/'), '#aspectWrapper iframe.game__iframe'],
  activate
);
