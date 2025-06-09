import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', () => document.querySelectorAll('product-card').length > 0], activate);
