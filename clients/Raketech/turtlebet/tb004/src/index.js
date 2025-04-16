import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body',
    '.MuiBox-root.css-yd8sa2',
    () =>
      document.querySelectorAll('.MuiBox-root.css-79elbk') &&
      document.querySelectorAll('.MuiBox-root.css-79elbk').length
  ],
  activate
);
