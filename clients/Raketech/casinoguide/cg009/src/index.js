import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  ['main .MuiBox-root:first-child > .MuiContainer-root a.MuiButtonBase-root + .MuiBox-root'],
  activate
);
