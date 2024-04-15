import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';
import shared from './lib/shared/shared';

const { VARIATION } = shared;

pollerLite([VARIATION === 1 ? 'body .product_badge' : 'body .Product_Aside'], activate);
