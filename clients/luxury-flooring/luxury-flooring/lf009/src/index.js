import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    '.fotorama__stage',
    '.fotorama__nav-wrap .fotorama__nav__frame.video-thumb-icon',
    () => window.jQuery.Fotorama !== undefined
  ],
  activate
);
