import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['.template-product', 'body', '[data-slider]'], activate);
