import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

document.body.style.opacity = '0';

pollerLite(['body', '.heroSection'], activate);
