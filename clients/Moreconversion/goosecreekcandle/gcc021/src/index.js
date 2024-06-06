import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(
  [
    'body',
    '#main-navigation-wrapper li.dropdown.mega-menu #sub-menu-block',
    '#mobile-menu--dev-menu .mobile-menu-link__has-submenu'
  ],
  activate
);
