import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    () =>
      document.querySelectorAll('.MuiGrid-container.mui-isbt42 .MuiGrid-item') &&
      document.querySelectorAll('.MuiGrid-container.mui-isbt42 .MuiGrid-item').length > 0
  ],
  //() => setTimeout(activate, 1000)
  activate
);
