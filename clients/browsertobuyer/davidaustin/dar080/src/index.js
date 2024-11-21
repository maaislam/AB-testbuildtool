import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.shopify-section-product-grid', 'form[id*="FilterForm-template"]', 'form[id*="FilterForm-template"] [data-buttons]', '.shopify-section-product-grid #Toolbar > div .contents'], activate);
