import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [() => document.querySelector('.cms-home') || document.querySelector('.page-with-filter')],
  activate
);
