import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.block-toplist .toplist-holder .toplist'], () => setTimeout(activate, 2000));
