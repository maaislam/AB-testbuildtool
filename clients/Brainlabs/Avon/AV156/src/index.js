import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const pollingSelector =
  window.DY.deviceInfo.type === 'desktop'
    ? 'header #HeaderSubmenus ul a[href*="/top-rated"]'
    : 'nav#HamburgerMenuNew ul#HamburgerCategories li a[href*="/top-rated"]';
pollerLite([pollingSelector], activate);
