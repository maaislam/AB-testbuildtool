import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

pollerLite(['.product-info-main', '#product-addtocart-button'], activate);
