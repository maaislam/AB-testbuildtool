import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['#CartPopup'], setTimeout(activate, 1500));
