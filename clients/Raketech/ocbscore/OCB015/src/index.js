import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    () =>
      document.querySelectorAll('.MuiCardContent-root.mui-ne8hhn') &&
      document.querySelectorAll('.MuiCardContent-root.mui-ne8hhn').length > 0
  ],
  //() => setTimeout(activate, 1000)
  activate
);
