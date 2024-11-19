import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.shopify-section-product-grid', 'form[id*="FilterForm-template"]'], activate);
