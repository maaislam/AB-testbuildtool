import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const pollingSelector =
window.DY?.deviceInfo?.type && window.DY.deviceInfo.type === 'desktop'
    ? 'header #HeaderSubmenus ul a[href*="/top-rated"]'
    : 'header #Hamburger';
pollerLite([pollingSelector], activate);
