import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['[src*="//www.kittyspout.com/cdn/shop/files/fbcomments"]'], activate);
