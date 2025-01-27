import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.product-page', () => typeof window.Rebuy === 'object'], activate);
