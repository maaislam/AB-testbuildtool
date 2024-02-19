import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.shopify-section .index-section .feature-row-wrapper'], activate);
