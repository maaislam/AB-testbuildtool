import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['form[action="/cart/add"] [data-oke-star-rating]'], activate);
