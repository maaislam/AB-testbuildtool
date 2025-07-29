import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  ['body', () => document.querySelectorAll('button[aria-label="Accept this offer"]').length > 0],
  activate
);
