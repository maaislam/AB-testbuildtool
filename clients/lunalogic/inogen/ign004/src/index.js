import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body.single-product', '.post--pdp__details', '.accessories__wrapper'], activate);
