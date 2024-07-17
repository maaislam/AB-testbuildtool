import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['html.hydrated', 'body', '#AddToCartForm #AddToCart'], activate);
