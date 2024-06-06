import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.product-medias', '.product-info-wrapper .product-page--pricing'], activate);
