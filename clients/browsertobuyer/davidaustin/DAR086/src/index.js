import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

if (window.location.pathname === '/collections/climbing-roses') {
} else if (window.location.pathname === '/collections/pink-roses') {
}
pollerLite(['body'], activate);
