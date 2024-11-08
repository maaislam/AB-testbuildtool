import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['#maincontent', () => typeof window.dataLayer !== 'undefined'], activate);
