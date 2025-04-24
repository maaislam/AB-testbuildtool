import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';
import shared from './lib/shared/shared';

const { ID } = shared;

pollerLite(['body.catalog-product-view', '.fp-calculator #product-addtocart-button'], activate);
