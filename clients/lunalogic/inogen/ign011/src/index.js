import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  ['body', () => document.querySelectorAll('input[name="ZipCode"], input[name="zip"]').length > 0],
  activate
);
