import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['html.hydrated', 'body.template-product', '#AddToCartForm'], activate);
