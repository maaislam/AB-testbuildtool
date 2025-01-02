import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body',
    () =>
      document.querySelectorAll('.MuiGrid-container.mui-isbt42 .MuiGrid-item') &&
      document.querySelectorAll('.MuiGrid-container.mui-isbt42 .MuiGrid-item').length > 0
  ],
  activate
);