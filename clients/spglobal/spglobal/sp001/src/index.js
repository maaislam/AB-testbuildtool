import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

console.log('start');

pollerLite(
  [
    'body',
    '#guideContainer-rootPanel___guide-item-container',
    '#guideContainer-rootPanel-panel___guide-item'
  ],
  activate
);
