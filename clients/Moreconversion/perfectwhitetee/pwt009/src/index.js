import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  ['body', '.site-navigation', '.site-navigation [href="/collections/essentials"]'],
  activate
);